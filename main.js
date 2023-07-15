function criateCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.clickBotton();
      this.pressBackSpace();
      this.pressEnter();
    },

    pressBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.accounting();
        }
      });
    },

    accounting() {
      let count = this.display.value;

      try {
        count = eval(count);

        if(!count) {
          alert('inválid Count');
          return;
        }

        this.display.value = String(count);
      } catch(e) {
        alert('inválid Count');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    mainlessOne() {
      this.display.value = this.display.value.slice(0, -1);
    },


    clickBotton() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.mainlessOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.accounting();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(value) {
      this.display.value += value;
    }

  };
}

const calculator = criateCalculator();
calculator.start();

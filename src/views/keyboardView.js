import KeyboardButtonView from './keyboardButtonView';
import AbstractNode from '../utils/abstractNode';

class KeyboardView {
  model;

  node;

  textarea;

  btns;

  isAlt;

  isCaps;

  constructor(model) {
    this.model = model;
    this.layout = Boolean(+localStorage.getItem('act-layout'));
    this.btns = [];
    this.isAlt = false;
    this.isCaps = false;

    this.textarea = document.createElement('textarea');
    this.textarea.onkeydown = (evt) => {
      evt.preventDefault();
    };

    this.createNode();
    this.createKeys();

    this.model.events.on('layoutChange', () => {
      this.layout = !this.layout;
      localStorage.setItem('act-layout', +this.layout);
      this.destroy();
      this.createKeys();
    });
  }

  destroy() {
    this.btns.map((row) => row.map((btn) => btn.destroy()));
    this.node.innerHTML = '';
  }

  createNode() {
    this.node = document.createElement('div');
    this.node.classList.add('keyboard');
  }

  createKeys() {
    this.model.layout[+this.layout].forEach((row) => {
      const rowEl = new AbstractNode(this.node, 'div', 'kb-row');

      const btns = row.map((key) => {
        const btn = new KeyboardButtonView(rowEl.node, key);

        btn.onKeyDown = (evt) => {
          btn.addHighlight();

          if ((btn.keyData.code === 'ShiftLeft' || btn.keyData.code === 'ShiftRight') && !evt.repeat) {
            this.toggleAltContent();
          }

          if (btn.keyData.code === 'CapsLock' && !evt.repeat) {
            this.toggleCapsContent();
          }

          this.updateBtns();
          this.showText(btn);
        };

        btn.onKeyUp = (evt) => {
          if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight')
            && !evt.repeat && evt.type === 'keyup') {
            this.toggleAltContent();
          }

          this.updateBtns();
          btn.removeHighlight();

          if ((btn.keyData.code === 'AltLeft' && evt.ctrlKey)
            || (btn.keyData.code === 'ControlLeft' && evt.altKey)) {
            this.model.events.emit('layoutChange', evt);
          }
        };

        if ((this.isCaps && btn.keyData.code === 'CapsLock')
          || (this.isAlt && (btn.keyData.code === 'ShiftLeft' || btn.keyData.code === 'ShiftRight'))) {
          btn.node.dataset.active = true;
        } else {
          delete btn.node.dataset.active;
        }

        this.model.events.on(`${key.code}keydown`, (evt) => btn.onKeyDown(evt));
        this.model.events.on(`${key.code}keyup`, (evt) => btn.onKeyUp(evt));

        return btn;
      });

      this.btns.push(btns);
    });
  }

  toggleAltContent() {
    this.isAlt = !this.isAlt;
  }

  toggleCapsContent() {
    this.isCaps = !this.isCaps;
  }

  updateBtns() {
    this.btns.forEach((row) => row.forEach((el) => {
      const btn = el;

      if (!btn.keyData.isFunc) {
        const isShifted = (this.isAlt && !this.isCaps) || (!this.isAlt && this.isCaps);

        if (this.isAlt && btn.keyData.altKey) {
          btn.node.textContent = btn.keyData.altKey;
        } else {
          btn.node.textContent = isShifted
            ? btn.keyData.key.toUpperCase()
            : btn.keyData.key;
        }
      }

      if ((this.isCaps && btn.keyData.code === 'CapsLock')
        || (this.isAlt && (btn.keyData.code === 'ShiftLeft' || btn.keyData.code === 'ShiftRight'))) {
        btn.node.dataset.active = true;
      } else {
        delete btn.node.dataset.active;
      }
    }));
  }

  showText(btn) {
    const {
      keyData,
      node: {
        textContent: text,
      },
    } = btn;

    const {
      value,
      selectionStart: start,
      selectionEnd: end,
    } = this.textarea;

    if (!keyData.isFunc) {
      this.textarea.setRangeText(text, start, end, 'end');
    } else {
      let lines = [];
      let offset = 0;

      switch (keyData.code) {
        case 'Backspace':
          this.textarea.value = (end - start)
            ? value.slice(0, start) + value.slice(end)
            : value.slice(0, end - 1) + value.slice(end);

          this.textarea.setSelectionRange(end - 1, end - 1);
          break;
        case 'Delete':
          this.textarea.value = (end - start)
            ? value.slice(0, start) + value.slice(end)
            : value.slice(0, end) + value.slice(end + 1);

          this.textarea.setSelectionRange(start, start);
          break;
        case 'Enter':
          this.textarea.setRangeText('\n', start, end, 'end');
          break;
        case 'Tab':
          this.textarea.setRangeText('\t', start, end, 'end');
          break;
        case 'ArrowLeft':
          if (start > 0) {
            this.textarea.setSelectionRange(start - 1, start - 1);
          }
          break;
        case 'ArrowRight':
          if (end + 1 !== 0) {
            this.textarea.setSelectionRange(end + 1, end + 1);
          }
          break;
        case 'ArrowUp':
          lines = value.slice(0, start).split('\n');

          if (lines.length > 1) {
            const currLineLength = lines[lines.length - 1].length;
            const prevLineLength = lines[lines.length - 2].length;

            const pos = (currLineLength > prevLineLength)
              ? start - currLineLength - 1
              : start - prevLineLength - 1;

            this.textarea.setSelectionRange(pos, pos);
          } else {
            this.textarea.setSelectionRange(0, 0);
          }
          break;
        case 'ArrowDown':
          lines = value.split('\n');

          if (lines.length > 1) {
            for (let i = 0; i < lines.length; i++) {
              const {
                length,
              } = lines[i];
              offset += length;

              if (offset >= end) {
                offset = length;
                break;
              }
            }

            lines = value.slice(end).split('\n');

            if (lines[0] && lines[1]) {
              const initLineLength = offset;
              const currLineLength = lines[0].length;
              const nextLineLength = lines[1].length;

              let pos = 0;

              if (initLineLength > nextLineLength) {
                pos = (currLineLength >= nextLineLength)
                  ? end + initLineLength + 1
                  : end + currLineLength + nextLineLength + 1;
              } else {
                pos = end + initLineLength + 1;
              }

              this.textarea.setSelectionRange(pos, pos);
            } else {
              this.textarea.setSelectionRange(-1, -1);
            }
          } else {
            this.textarea.setSelectionRange(-1, -1);
          }
          break;

        default:
      }
    }

    this.textarea.focus();
  }
}

export default KeyboardView;

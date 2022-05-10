import AbstractNode from '../utils/abstractNode';

class KeyboardButtonView extends AbstractNode {
  onKeyDown;

  onKeyUp;

  keyData;

  constructor(parentNode, keyData) {
    super(parentNode, 'div', 'kb-btn', keyData.key);

    this.keyData = keyData;

    if (this.keyData.size) {
      this.node.dataset.size = this.keyData.size;
    }

    this.node.onmousedown = (e) => {
      e.preventDefault();
      this.onKeyDown(e);

      const interval = setInterval(() => {
        this.onKeyDown(e);
      }, 150);

      const handleKeyup = (evt) => {
        evt.preventDefault();
        this.onKeyUp(evt);
        clearInterval(interval);
      };

      this.node.onmouseup = handleKeyup;
      this.node.onmouseleave = handleKeyup;
    };
  }

  destroy() {
    this.onKeyDown = () => {};
    this.onKeyUp = () => {};
    super.destroy();
  }

  addHighlight() {
    this.node.classList.add('active');
  }

  removeHighlight() {
    this.node.classList.remove('active');
  }
}

export default KeyboardButtonView;

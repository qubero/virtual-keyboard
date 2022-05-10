import EventEmitter from '../utils/eventEmitter';

class KeyboardModel {
  constructor(layout) {
    this.events = new EventEmitter();
    this.layout = layout;
  }
}

export default KeyboardModel;

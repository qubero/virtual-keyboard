export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (typeof callback !== 'function') {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(this.events, eventName)) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return this;
  }

  emit(eventName, args) {
    if (!Object.prototype.hasOwnProperty.call(this.events, eventName)) {
      return false;
    }

    this.events[eventName].map((callback) => callback(args));

    return true;
  }
}

class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    document.onkeydown = (e) => {
      this.model.events.emit(`${e.code}keydown`, e);
    };

    document.onkeyup = (e) => {
      this.model.events.emit(`${e.code}keyup`, e);
    };
  }
}

export default KeyboardController;

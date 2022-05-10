import './styles/index.scss';

import en from './layouts/layout_en.json';
import ru from './layouts/layout_ru.json';

import KeyboardModel from './models/keyboardModel';
import KeyboardView from './views/keyboardView';
import KeyboardController from './controllers/keyboardController';
import AbstractNode from './utils/abstractNode';

const model = new KeyboardModel([en, ru]);
const view = new KeyboardView(model);
// eslint-disable-next-line no-unused-vars
const controller = new KeyboardController(model, view.node);

const info = new AbstractNode(null, 'div', 'info');
info.node.innerHTML = `
Клавиатура создана в операционной системе Windows\n
Комбинация для переключения языка: левыe <b>ctrl</b> + <b>alt</b>
`;

document.body.append(info.node);
document.body.append(view.node);
view.node.before(view.textarea);
view.textarea.focus();

!function(){"use strict";var e=JSON.parse('[[{"key":"`","altKey":"~","code":"Backquote","isFunc":false},{"key":"1","altKey":"!","code":"Digit1","isFunc":false},{"key":"2","altKey":"@","code":"Digit2","isFunc":false},{"key":"3","altKey":"#","code":"Digit3","isFunc":false},{"key":"4","altKey":"$","code":"Digit4","isFunc":false},{"key":"5","altKey":"%","code":"Digit5","isFunc":false},{"key":"6","altKey":"^","code":"Digit6","isFunc":false},{"key":"7","altKey":"&","code":"Digit7","isFunc":false},{"key":"8","altKey":"*","code":"Digit8","isFunc":false},{"key":"9","altKey":"(","code":"Digit9","isFunc":false},{"key":"0","altKey":")","code":"Digit0","isFunc":false},{"key":"-","altKey":"_","code":"Minus","isFunc":false},{"key":"=","altKey":"+","code":"Equal","isFunc":false},{"key":"Backspace","altKey":"Backspace","code":"Backspace","isFunc":true}],[{"key":"Tab","code":"Tab","isFunc":true,"size":1.5},{"key":"q","code":"KeyQ","isFunc":false},{"key":"w","code":"KeyW","isFunc":false},{"key":"e","code":"KeyE","isFunc":false},{"key":"r","code":"KeyR","isFunc":false},{"key":"t","code":"KeyT","isFunc":false},{"key":"y","code":"KeyY","isFunc":false},{"key":"u","code":"KeyU","isFunc":false},{"key":"i","code":"KeyI","isFunc":false},{"key":"o","code":"KeyO","isFunc":false},{"key":"p","code":"KeyP","isFunc":false},{"key":"[","altKey":"{","code":"BracketLeft","isFunc":false},{"key":"]","altKey":"}","code":"BracketRight","isFunc":false},{"key":"\\\\","altKey":"|","code":"Backslash","isFunc":false},{"key":"Del","code":"Delete","isFunc":true}],[{"key":"CapsLock","code":"CapsLock","isFunc":true,"size":2.5},{"key":"a","code":"KeyA","isFunc":false},{"key":"s","code":"KeyS","isFunc":false},{"key":"d","code":"KeyD","isFunc":false},{"key":"f","code":"KeyF","isFunc":false},{"key":"g","code":"KeyG","isFunc":false},{"key":"h","code":"Keyh","isFunc":false},{"key":"j","code":"KeyJ","isFunc":false},{"key":"k","code":"KeyK","isFunc":false},{"key":"l","code":"KeyL","isFunc":false},{"key":";","altKey":":","code":"Semicolon","isFunc":false},{"key":"\'","altKey":"\\"","code":"Quote","isFunc":false},{"key":"Enter","code":"Enter","isFunc":true,"size":2.5}],[{"key":"Shift","code":"ShiftLeft","isFunc":true,"size":3},{"key":"z","code":"KeyZ","isFunc":false},{"key":"x","code":"KeyX","isFunc":false},{"key":"c","code":"KeyC","isFunc":false},{"key":"v","code":"KeyV","isFunc":false},{"key":"b","code":"KeyB","isFunc":false},{"key":"n","code":"KeyN","isFunc":false},{"key":"m","code":"KeyM","isFunc":false},{"key":",","altKey":"<","code":"Comma","isFunc":false},{"key":".","altKey":">","code":"Period","isFunc":false},{"key":"/","altKey":"?","code":"Slash","isFunc":false},{"key":"▲","code":"ArrowUp","isFunc":true},{"key":"Shift","code":"ShiftRight","isFunc":true,"size":2.75}],[{"key":"Ctrl","code":"ControlLeft","isFunc":true,"size":1.5},{"key":"Alt","code":"AltLeft","isFunc":true},{"key":" ","code":"Space","isFunc":false,"size":12},{"key":"Alt","code":"AltRight","isFunc":true},{"key":"◄","code":"ArrowLeft","isFunc":true},{"key":"▼","code":"ArrowDown","isFunc":true},{"key":"►","code":"ArrowRight","isFunc":true},{"key":"Ctrl","code":"ControlRight","isFunc":true,"size":1.5}]]'),t=JSON.parse('[[{"key":"ё","code":"Backquote","isFunc":false},{"key":"1","altKey":"!","code":"Digit1","isFunc":false},{"key":"2","altKey":"@","code":"Digit2","isFunc":false},{"key":"3","altKey":"#","code":"Digit3","isFunc":false},{"key":"4","altKey":"$","code":"Digit4","isFunc":false},{"key":"5","altKey":"%","code":"Digit5","isFunc":false},{"key":"6","altKey":"^","code":"Digit6","isFunc":false},{"key":"7","altKey":"&","code":"Digit7","isFunc":false},{"key":"8","altKey":"*","code":"Digit8","isFunc":false},{"key":"9","altKey":"(","code":"Digit9","isFunc":false},{"key":"0","altKey":")","code":"Digit0","isFunc":false},{"key":"-","altKey":"_","code":"Minus","isFunc":false},{"key":"=","altKey":"+","code":"Equal","isFunc":false},{"key":"Backspace","altKey":"Backspace","code":"Backspace","isFunc":true}],[{"key":"Tab","code":"Tab","isFunc":true,"size":1.5},{"key":"й","code":"KeyQ","isFunc":false},{"key":"ц","code":"KeyW","isFunc":false},{"key":"у","code":"KeyE","isFunc":false},{"key":"к","code":"KeyR","isFunc":false},{"key":"е","code":"KeyT","isFunc":false},{"key":"н","code":"KeyY","isFunc":false},{"key":"г","code":"KeyU","isFunc":false},{"key":"ш","code":"KeyI","isFunc":false},{"key":"щ","code":"KeyO","isFunc":false},{"key":"з","code":"KeyP","isFunc":false},{"key":"х","code":"BracketLeft","isFunc":false},{"key":"ъ","code":"BracketRight","isFunc":false},{"key":"\\\\","altKey":"|","code":"Backslash","isFunc":false},{"key":"Del","code":"Delete","isFunc":true}],[{"key":"CapsLock","code":"CapsLock","isFunc":true,"size":2.5},{"key":"ф","code":"KeyA","isFunc":false},{"key":"ы","code":"KeyS","isFunc":false},{"key":"в","code":"KeyD","isFunc":false},{"key":"а","code":"KeyF","isFunc":false},{"key":"п","code":"KeyG","isFunc":false},{"key":"р","code":"Keyh","isFunc":false},{"key":"о","code":"KeyJ","isFunc":false},{"key":"л","code":"KeyK","isFunc":false},{"key":"д","code":"KeyL","isFunc":false},{"key":"ж","code":"Semicolon","isFunc":false},{"key":"э","code":"Quote","isFunc":false},{"key":"Enter","code":"Enter","isFunc":true,"size":2.5}],[{"key":"Shift","code":"ShiftLeft","isFunc":true,"size":3},{"key":"я","code":"KeyZ","isFunc":false},{"key":"ч","code":"KeyX","isFunc":false},{"key":"с","code":"KeyC","isFunc":false},{"key":"м","code":"KeyV","isFunc":false},{"key":"и","code":"KeyB","isFunc":false},{"key":"т","code":"KeyN","isFunc":false},{"key":"ь","code":"KeyM","isFunc":false},{"key":"б","code":"NumpadDecimal","isFunc":false},{"key":"ю","code":"Period","isFunc":false},{"key":".","altKey":",","code":"Slash","isFunc":false},{"key":"▲","code":"ArrowUp","isFunc":true},{"key":"Shift","code":"ShiftRight","isFunc":true,"size":2.75}],[{"key":"Ctrl","code":"ControlLeft","isFunc":true,"size":1.5},{"key":"Alt","code":"AltLeft","isFunc":true},{"key":" ","code":"Space","isFunc":false,"size":12},{"key":"Alt","code":"AltRight","isFunc":true},{"key":"◄","code":"ArrowLeft","isFunc":true},{"key":"▼","code":"ArrowDown","isFunc":true},{"key":"►","code":"ArrowRight","isFunc":true},{"key":"Ctrl","code":"ControlRight","isFunc":true,"size":1.5}]]');function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}var t,o;return t=e,(o=[{key:"on",value:function(e,t){return"function"==typeof t&&(Object.prototype.hasOwnProperty.call(this.events,e)||(this.events[e]=[]),this.events[e].push(t),this)}},{key:"emit",value:function(e,t){return!!Object.prototype.hasOwnProperty.call(this.events,e)&&(this.events[e].map((function(e){return e(t)})),!0)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=a((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events=new o,this.layout=t}));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";s(this,e),l(this,"node",void 0);var a=document.createElement(n);t&&t.append(a),o&&(a.className=o),a.textContent=i,this.node=a}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.node.remove()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=u;function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=h(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},k.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function F(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(o);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),K(v(n=a.call(this,e,"div","kb-btn",t.key)),"onKeyDown",void 0),K(v(n),"onKeyUp",void 0),K(v(n),"keyData",void 0),n.keyData=t,n.keyData.size&&(n.node.dataset.size=n.keyData.size),n.node.onmousedown=function(e){e.preventDefault(),n.onKeyDown(e);var t=setInterval((function(){n.onKeyDown(e)}),150),o=function(e){e.preventDefault(),n.onKeyUp(e),clearInterval(t)};n.node.onmouseup=o,n.node.onmouseleave=o},n}return t=c,(n=[{key:"destroy",value:function(){this.onKeyDown=function(){},this.onKeyUp=function(){},k(b(c.prototype),"destroy",this).call(this)}},{key:"addHighlight",value:function(){this.node.classList.add("active")}},{key:"removeHighlight",value:function(){this.node.classList.remove("active")}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(y);function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"model",void 0),m(this,"node",void 0),m(this,"textarea",void 0),m(this,"btns",void 0),m(this,"isAlt",void 0),m(this,"isCaps",void 0),this.model=t,this.layout=Boolean(+localStorage.getItem("act-layout")),this.btns=[],this.isAlt=!1,this.isCaps=!1,this.textarea=document.createElement("textarea"),this.textarea.onkeydown=function(e){e.preventDefault()},this.createNode(),this.createKeys(),this.model.events.on("layoutChange",(function(){n.layout=!n.layout,localStorage.setItem("act-layout",+n.layout),n.destroy(),n.createKeys()}))}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.btns.map((function(e){return e.map((function(e){return e.destroy()}))})),this.node.innerHTML=""}},{key:"createNode",value:function(){this.node=document.createElement("div"),this.node.classList.add("keyboard")}},{key:"createKeys",value:function(){var e=this;this.model.layout[+this.layout].forEach((function(t){var n=new y(e.node,"div","kb-row"),o=t.map((function(t){var o=new g(n.node,t);return o.onKeyDown=function(t){o.addHighlight(),"ShiftLeft"!==o.keyData.code&&"ShiftRight"!==o.keyData.code||t.repeat||e.toggleAltContent(),"CapsLock"!==o.keyData.code||t.repeat||e.toggleCapsContent(),e.updateBtns(),e.showText(o)},o.onKeyUp=function(n){"ShiftLeft"!==t.code&&"ShiftRight"!==t.code||n.repeat||"keyup"!==n.type||e.toggleAltContent(),e.updateBtns(),o.removeHighlight(),("AltLeft"===o.keyData.code&&n.ctrlKey||"ControlLeft"===o.keyData.code&&n.altKey)&&e.model.events.emit("layoutChange",n)},e.isCaps&&"CapsLock"===o.keyData.code||e.isAlt&&("ShiftLeft"===o.keyData.code||"ShiftRight"===o.keyData.code)?o.node.dataset.active=!0:delete o.node.dataset.active,e.model.events.on("".concat(t.code,"keydown"),(function(e){return o.onKeyDown(e)})),e.model.events.on("".concat(t.code,"keyup"),(function(e){return o.onKeyUp(e)})),o}));e.btns.push(o)}))}},{key:"toggleAltContent",value:function(){this.isAlt=!this.isAlt}},{key:"toggleCapsContent",value:function(){this.isCaps=!this.isCaps}},{key:"updateBtns",value:function(){var e=this;this.btns.forEach((function(t){return t.forEach((function(t){var n=t;if(!n.keyData.isFunc){var o=e.isAlt&&!e.isCaps||!e.isAlt&&e.isCaps;e.isAlt&&n.keyData.altKey?n.node.textContent=n.keyData.altKey:n.node.textContent=o?n.keyData.key.toUpperCase():n.keyData.key}e.isCaps&&"CapsLock"===n.keyData.code||e.isAlt&&("ShiftLeft"===n.keyData.code||"ShiftRight"===n.keyData.code)?n.node.dataset.active=!0:delete n.node.dataset.active}))}))}},{key:"showText",value:function(e){var t=e.keyData,n=e.node.textContent,o=this.textarea,i=o.value,a=o.selectionStart,c=o.selectionEnd;if(t.isFunc){var s=[],r=0;switch(t.code){case"Backspace":this.textarea.value=c-a?i.slice(0,a)+i.slice(c):i.slice(0,c-1)+i.slice(c),this.textarea.setSelectionRange(c-1,c-1);break;case"Delete":this.textarea.value=c-a?i.slice(0,a)+i.slice(c):i.slice(0,c)+i.slice(c+1),this.textarea.setSelectionRange(a,a);break;case"Enter":this.textarea.setRangeText("\n",a,c,"end");break;case"Tab":this.textarea.setRangeText("\t",a,c,"end");break;case"ArrowLeft":a>0&&this.textarea.setSelectionRange(a-1,a-1);break;case"ArrowRight":c+1!==0&&this.textarea.setSelectionRange(c+1,c+1);break;case"ArrowUp":if((s=i.slice(0,a).split("\n")).length>1){var l=s[s.length-1].length,u=s[s.length-2].length,y=l>u?a-l-1:a-u-1;this.textarea.setSelectionRange(y,y)}else this.textarea.setSelectionRange(0,0);break;case"ArrowDown":if((s=i.split("\n")).length>1){for(var f=0;f<s.length;f++){var d=s[f].length;if((r+=d)>=c){r=d;break}}if((s=i.slice(c).split("\n"))[0]&&s[1]){var k,h=r,p=s[0].length,F=s[1].length;k=h>F?p>=F?c+h+1:c+p+F+1:c+h+1,this.textarea.setSelectionRange(k,k)}else this.textarea.setSelectionRange(-1,-1)}else this.textarea.setSelectionRange(-1,-1)}}else this.textarea.setRangeText(n,a,c,"end");this.textarea.focus()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=D;function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var R=O((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,document.onkeydown=function(e){o.model.events.emit("".concat(e.code,"keydown"),e)},document.onkeyup=function(e){o.model.events.emit("".concat(e.code,"keyup"),e)}})),A=R,x=new c([e,t]),L=new C(x),P=(new A(x,L.node),new y(null,"div","info"));P.node.innerHTML="\nКлавиатура создана в операционной системе Windows\n\nКомбинация для переключения языка: левыe <b>ctrl</b> + <b>alt</b>\n",document.body.append(P.node),document.body.append(L.node),L.node.before(L.textarea),L.textarea.focus()}();
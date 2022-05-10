class AbstractNode {
  node;

  constructor(
    parentNode,
    tagName = '',
    classes = '',
    textContent = '',
  ) {
    const element = document.createElement(tagName);
    if (parentNode) parentNode.append(element);
    if (classes) element.className = classes;
    element.textContent = textContent;
    this.node = element;
  }

  destroy() {
    this.node.remove();
  }
}

export default AbstractNode;

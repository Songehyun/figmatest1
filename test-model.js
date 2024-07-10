function elementMaker(tagName, styles, textContent) {
  const element = document.createElement(tagName);
  for (let value in styles) {
    element.style[value] = styles[value];
  }
  element.textContent = textContent;
  return element;
}

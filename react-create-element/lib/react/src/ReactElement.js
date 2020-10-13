import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  // support for events
  if (prop.startsWith("on")) {
    const event = prop.replace("on", "").toLowerCase();
    return setEvents(element, event, value);
  }
  // support for children
  if (prop === "children") {
    return renderChildren(value, element);
  }

  // support for attributes
  const attribute = value;
  element.setAttribute(prop, attribute);
  return element;
}

export function createElement(type, props, content) {
  // Creating type of element
  const element = document.createElement(type);

  // Content
  if (content) {
    element.textContent = content;
  }
  // Props
  Object.keys(props).forEach((key) => setProperties(key, props[key], element));
  return element;
}

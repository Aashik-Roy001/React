function customRender(reactElement, conatiner) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   conatiner.appendChild(domElement);

  // 2nd way to do above code:

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
    conatiner.appendChild(domElement);
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/watch?v=FxgM9k1rg0Q&t=6062s",
    target: "_blank",
  },
  children: "click me to visit you tube",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);

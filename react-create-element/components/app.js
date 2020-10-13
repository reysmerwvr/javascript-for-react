import { Component, createElement } from "../lib/react/index.js";
import User from "./user.js";
import UserStyled from "./user-styled.js";
import Wrapper from "./wrapper.js";

class App extends Component {
  render() {
    return createElement("div", {
      class: "app",
      children: new Wrapper({
        children: [
          createElement("h1", {}, "React.js ⭐️⭐️⭐️⭐️⭐️"),
          new User({
            avatar: "./images/ash.jpg",
            name: "Ash",
            age: 10,
          }),
          new UserStyled({
            avatar: "./images/ash.jpg",
            name: "Ash",
            age: 10,
          }),
        ],
      }),
    });
  }
}

// ${new Wrapper({
//   children: `
//     <h1>React.js ⭐️⭐️⭐️⭐️⭐️</h1>
//     ${new User({
//       avatar: "./images/ash.jpg",
//       name: "Ash",
//     }).render()}
//     ${new UserStyled({
//       avatar: "./images/ash.jpg",
//       name: "Ash",
//     }).render()}
//   `,
// }).render()}

export default App;

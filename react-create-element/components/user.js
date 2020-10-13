import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  displayName = "User";
  state = {
    age: this.props.age,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   console.log(this.props.name);
  // }

  componentWillMount() {
    console.log(`Component ${this.displayName} will be rendered!!!`);
  }

  componentDidMount() {
    console.log(`Component ${this.displayName} rendered!!!`);
  }

  componentDidUpdate() {
    console.log(`Component ${this.displayName} will be updated!!!`);
  }

  handleClick = (event) => {
    // console.log(this.state.age);
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
    return createElement("div", {
      class: "user",
      onClick: this.handleClick,
      children: [
        createElement("div", {
          class: "avatar",
          children: [
            createElement("img", {
              src: avatar,
              alt: "avatar",
            }),
          ],
        }),
        createElement("h2", {}, `Hello I'm ${name} and I'm ${age} years old`),
      ],
    });
  }
}

export default User;

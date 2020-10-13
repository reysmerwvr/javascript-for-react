import { Component } from "../lib/react.js";

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return `
      <div className="wrapper">
        ${children}
      </div>
    `;
  }
}

export default Wrapper;
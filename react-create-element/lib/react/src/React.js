class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  update() {}

  #updater() {
    this.update(this.render());
    this.componentDidUpdate();
  }

  // Called before render the component
  componentWillMount() {}

  componentDidMount() {}
  componentDidUpdate() {}

  build() {
    this.componentWillMount();
    return this.render();
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }
}

export { Component };

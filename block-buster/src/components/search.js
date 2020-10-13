import { Component } from "../lib/react/index.js";
import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";
import { searchMovie } from "../actions/index.js";

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    searchMovie(formData.get("title"));
  };

  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        new Input({
          placeholder: "Type your favorite movie",
          name: "title",
          type: "text",
        }),
        new Button({}, "Search"),
      ],
    });
  }
}

export default Search;

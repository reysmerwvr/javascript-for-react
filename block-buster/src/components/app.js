import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "../components/header.js";
import Actions from "../components/actions.js";
import Search from "../components/search.js";
import Filters from "../components/filters.js";
import MovieList from "../components/movie-list.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [
            new Search(),
            new Filters()
          ]
        }),
        new MovieList()
      ]
    });
  }
}

export default App;

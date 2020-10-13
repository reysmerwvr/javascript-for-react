import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "../components/wrapper.js";
import Movie from "../components/movie.js";
import { getLocalMovies, fetchMovies } from "../actions/index.js";
import store from "../store.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  state = {
    page: 1,
  };

  componentWillMount() {
    getLocalMovies();
  }

  handleIntersection = (entries) => {
    const { page } = this.state;
    if (entries[0].isIntersecting) {
      fetchMovies(page);
      this.setState({
        page: page + 1,
      });
    }
  };

  componentDidMount() {
    fetchMovies(this.state.page);
    store.subscribe(() => {
      this.setState();
    });
    const observer = new IntersectionObserver(this.handleIntersection);
    observer.observe(window.intersector);
  }

  render() {
    const state = store.getState();
    const { filter, list, movieList } = state;
    const movieListId = list[filter];
    return Wrapper({
      children: [
        MovieListStyled({
          children: movieListId.map((id) => new Movie(movieList.get(id))),
        }),
      ],
    });
  }
}

export default MovieList;

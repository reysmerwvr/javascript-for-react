// import rawMoviesList from './movies.js'

function movieListAsMap(newList, oldMap = new Map()) {
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie);
    return list;
  }, oldMap);
}

function getAllIds(list, oldList = []) {
  return oldList.concat(list.map((movie) => movie.id));
}

function getMostValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    if (movie.vote_average >= 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}

function getLeastValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    if (movie.vote_average < 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}

function filterByTitle(title, movies) {
  const list = [];
  movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id);
    }
  });
  return list;
}

function findById(id, allIds) {
  const parseId = parseInt(id, 10);
  if (allIds.includes(parseId)) {
    return [parseId];
  }
  return allIds;
}

function searchMovie(query, list, allIds) {
  if (isNaN(query)) {
    return filterByTitle(query, list);
  }
  return findById(query, allIds);
}

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
  filterByTitle,
  findById,
  searchMovie,
};

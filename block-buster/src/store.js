import { createStore } from './redux/index.js';
import moviesReducer from './reducers/index.js';

const store = createStore(moviesReducer);

export default store;

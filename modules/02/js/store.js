import { createStore } from './redux/index.js';
import caloriesReducer from './reducers/index.js';

const store = createStore(caloriesReducer);

export default store;

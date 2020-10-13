import store from './store.js';
import { burn } from './actions/index.js';

store.subscribe((_) => {
  const state = store.getState();
  console.log("Something changed in the store", state);
  window.result.textContent = `You have burned ${state.calories} calories.
    You need ${state.clicks} to burn the equivalent calories of a pizza and a coke`;
});

window.burn.addEventListener("click", burn);

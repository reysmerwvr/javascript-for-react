import store from '../store.js';
import { BURN_CALORIES } from './types.js';

export const burn = () => {
  store.dispatch({
    type: BURN_CALORIES,
    payload: 1.42,
  });
};
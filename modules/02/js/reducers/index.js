import { BURN_CALORIES } from '../actions/types.js';


const INITIAL_STATE = {
  error: null,
  loading: false,
  calories: 0,
  clicks: 1360563,
};

const caloriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case BURN_CALORIES:
      let { calories, clicks } = state;
      calories = parseFloat(
        parseFloat(calories) + parseFloat(payload)
      ).toFixed(2);
      clicks--;
      return {
        ...state,
        calories,
        clicks,
      };
    default:
      return state;
  }
};

export default caloriesReducer;
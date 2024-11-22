import { SET_MOVIES } from "./actions";

const initialState = {
  data: [], 
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;

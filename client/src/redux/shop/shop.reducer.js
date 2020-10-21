import { ADD_CATEGORY, LOADED_CATEGORY, LOADED_REQUESTS, UPDATED_REQUEST } from "./shop.types";

const defaultState = {
  categories: [],
  requests: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADED_CATEGORY:
      return {
        ...state,
        categories: [...action.payload],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };
    case LOADED_REQUESTS:
      return {
        ...state,
        requests: [...action.payload],
      };
    case UPDATED_REQUEST:
      return {
        ...state,
        requests: state.requests.map((request) =>
          request._id === action.id ? { ...action.payload } : request
        ),
      };
    default:
      return state;
  }
};

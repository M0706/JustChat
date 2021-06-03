import { DATA } from "../types";

const initialState = {
  data: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;

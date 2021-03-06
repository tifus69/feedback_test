import { ADD_COMMENT } from "./actions.constants";

import { comments } from "../utils/datas";

export const initialState = {
  comments,
  data: [2, 1, 1, 1, 1],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: action.payload.comments,
        data: action.payload.data,
      };
    default:
      throw new Error();
  }
}

export default reducer;

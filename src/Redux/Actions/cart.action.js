import { actionTypes } from "../Types/types";

export const addToCart = (id, quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
      quantity,
    },
  });
};

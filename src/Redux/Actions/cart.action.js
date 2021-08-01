import { actionTypes } from "../Types/types";

export const addToCart = (product, quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  });
};

export const removeFromCart = (product, quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_ONE_FROM_CART,
    payload: {
      product,
      quantity,
    },
  });
};

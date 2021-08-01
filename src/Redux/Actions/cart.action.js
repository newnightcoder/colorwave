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

export const removeOne = (product, quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_ONE_FROM_CART,
    payload: {
      product,
      quantity,
    },
  });
};

export const deleteItem = (product) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ITEM,
    payload: {
      product,
    },
  });
};

export const deleteCart = (cart) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ITEM,
    payload: {
      cart,
    },
  });
};

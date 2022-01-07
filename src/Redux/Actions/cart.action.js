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

export const deleteCart = () => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CART });
};

export const toggleCartDrawer = () => (dispatch) => {
  dispatch({ type: actionTypes.OPEN_CART });
};

export const saveOrder = (order) => (dispatch) => {
  // const request = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "post",
  //   body: JSON.stringify(order),
  // };
  dispatch({ type: actionTypes.SAVE_ORDER, payload: order });
};

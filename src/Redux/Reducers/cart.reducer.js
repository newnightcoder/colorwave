import { actionTypes } from "../Types/types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      // 1. check if the item is already in the cart and add it to itself
      let isAlready = false;
      for (let i = 0; i < state.length; i++) {
        if (item.id === state[i].id) {
          isAlready = true;
        }
      }
      if (isAlready) {
        let test = [...state];
        state = test.map((product, i) =>
          product.id === item.id
            ? {
                id: product.id,
                quantity: product.quantity + 1,
              }
            : product
        );
        // 2. if not, add to cart
      } else {
        state = [...state, item];
      }
    // case actionTypes.ADJUST_QUANTITY:
    //   break;
    // case actionTypes.DELETE_ITEM:
    //   break;
    default:
      return state;
  }
};

export default cartReducer;

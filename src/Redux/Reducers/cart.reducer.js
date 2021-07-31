import { actionTypes } from "../Types/types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      // 1. check if the item is already in the cart and add it to itself
      let isAlready = false;
      for (let i = 0; i < state.length; i++) {
        if (item.product.id === state[i].product.id) {
          isAlready = true;
        }
      }
      if (isAlready) {
        let stateCopy = [...state];
        // nb: map returns an array😉
        state = stateCopy.map((cartItem, i) =>
          cartItem.product.id === item.product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
        // 2. if not, add to cart
      } else state = [...state, item];

    // case actionTypes.ADJUST_QUANTITY:
    //   break;
    // case actionTypes.DELETE_ITEM:
    //   break;
    default:
      return state;
  }
};

export default cartReducer;

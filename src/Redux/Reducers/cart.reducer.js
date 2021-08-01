import { actionTypes } from "../Types/types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let item = action.payload;
      // 1. check if the item is already in the cart and add it to itself
      const isInCart = state.find((x) => x.product.id === item.product.id);
      console.log(isInCart);
      if (isInCart) {
        let stateCopy = [...state];
        // nb: map returns an array😉
        return (state = stateCopy.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        ));
        // 2. if not, add to cart
      } else return (state = [...state, item]);
    }

    case actionTypes.REMOVE_ONE_FROM_CART: {
      let item = action.payload;
      // 1. find the item in the state (cart)
      const targetItem = state.find((x) => x.product.id === item.product.id);
      const stateCopy = [...state];
      return (state = stateCopy.map((x) =>
        x.product.id === targetItem.product.id
          ? {
              ...x,
              quantity: x.quantity > 0 && x.quantity - 1,
            }
          : x
      ));
    }

    case actionTypes.DELETE_ITEM: {
      let item = action.payload;
      const stateCopy = [...state];
      state = stateCopy.filter((x) => x.product.id !== item.product.id);
    }

    case actionTypes.DELETE_CART: {
      state = [];
    }

    default:
      return state;
  }
};

export default cartReducer;

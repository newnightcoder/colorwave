const shop = [];

const shopReducer = (state = shop, action) => {
  switch (action.type) {
    case "GET_SHOP": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default shopReducer;

const initialState = [];

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHOP": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default shopReducer;

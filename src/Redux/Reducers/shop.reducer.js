const initialState = {
  shop: [],
  openSearchModal: false,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHOP": {
      return {
        ...state,
        shop: action.payload,
      };
    }
    case "OPEN_SEARCH_MODAL": {
      return {
        ...state,
        openSearchModal: true,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;

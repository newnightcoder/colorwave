import listing from "../API";

export const getShopData = async (dispatch, getState) => {
  const data = await listing();
  dispatch({ type: "GET_SHOP", payload: data });
};

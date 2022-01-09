import listing from "../../API";
import { actionTypes } from "../Types/types";

export const getShopData = async (dispatch) => {
  const data = await listing();
  dispatch({
    type: actionTypes.GET_SHOP,
    payload: data,
  });
};

export const openSearchModal = () => (dispatch) => {
  dispatch({ type: actionTypes.OPEN_SEARCH_MODAL });
};

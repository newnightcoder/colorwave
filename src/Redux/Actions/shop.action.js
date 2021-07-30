import listing from "../../API";
import { actionTypes } from "../Types/types";

export const getShopData = async (dispatch, getState) => {
  const data = await listing();
  dispatch({
    type: actionTypes.GET_SHOP,
    payload: data,
  });
};

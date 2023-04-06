import { LOGIN_DETAILS, LOG_OUT } from "./actionType";
import { EmptyStorage } from "../utils/AsyncStorage";

const initialState = {
  loginDetails: {},
  searchDetails: {}
};
export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_DETAILS:
      return { ...state, loginDetails: payload };
    case LOG_OUT: {
      EmptyStorage();
      return { loginDetails: {} };}
    default:
      return state;
  }
};

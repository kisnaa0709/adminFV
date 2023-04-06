import { LOGIN_DETAILS, LOG_OUT } from "./actionType";

export const loginDetails = ({ payload }) => ({
  type: LOGIN_DETAILS,
  payload: payload,
});

export const logOut = () => ({
  type: LOG_OUT,
});

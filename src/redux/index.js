import { combineReducers } from "redux";
import postReducer from "./reducers";

export default combineReducers(
  {
  post: postReducer,
}
);



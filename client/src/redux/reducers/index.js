import { combineReducers } from "redux";
import options from "./options";
import poll from "./poll";
import polls from "./polls";
import user from "./user";

export default combineReducers({
  options,
  poll,
  polls,
  user
});

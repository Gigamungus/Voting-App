import { combineReducers } from "redux";
import options from "./options";
import polls from "./polls";

export default combineReducers({
  options,
  polls
});

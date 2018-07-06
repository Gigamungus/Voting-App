import { combineReducers } from "redux";
import options from "./options";
import poll from "./poll";
import polls from "./polls";
import user from "./user";
import signup from "./signup";
import myPolls from "./myPolls"

export default combineReducers({
  options,
  poll,
  polls,
  user,
  signup,
  myPolls
});

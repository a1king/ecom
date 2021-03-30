import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import shop from "./shopReducer";

import headerNavbar from "./headernavbarReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop,
});

export default rootReducer;

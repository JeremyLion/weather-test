import { combineReducers } from "redux";
import ipReducer from "./ip";
import sunsetsunriseReducer from "./sunrisesunset";
import userReducer from "./user";

const rootRedurcer = combineReducers({
  user: userReducer,
  ip: ipReducer,
  sunsetsunrise: sunsetsunriseReducer,
});

export default rootRedurcer;

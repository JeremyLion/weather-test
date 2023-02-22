
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRedurcer from "./reducers";

// Combine all the reducers into a root reducer
const store = createStore(rootRedurcer, applyMiddleware(thunk))

export default store
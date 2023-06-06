import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { taskReducer } from "./reducers/reducer";

const rootReducer = combineReducers({
  edit: taskReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

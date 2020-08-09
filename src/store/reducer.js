import { combineReducers } from "redux";

import entitiesReducer from "./entitites";

export default combineReducers({
  entities: entitiesReducer,
});

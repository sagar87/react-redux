import store from "./store";
import * as actions from "./actionTypes";

// subscribe to the store
// subscribe yields an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

console.log(store);

console.log(store.getState());

store.dispatch({
  type: actions.BUG_ADDED,
  payload: { description: "Bug1" },
});

console.log(store.getState());

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: { id: 1 },
});

console.log(store.getState());

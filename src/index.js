import store from "./store";

// subscribe to the store
// subscribe yields an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

console.log(store);

console.log(store.getState());

store.dispatch({
  type: "bugAdded",
  payload: { description: "Bug1" },
});

console.log(store.getState());

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 },
});

console.log(store.getState());

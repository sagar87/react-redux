import store from "./store";
import { bugAdded, bugRemoved } from "./actions";
// subscribe to the store
// subscribe yields an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

console.log(store);

console.log(store.getState());

store.dispatch(bugAdded("bug 1"));

console.log(store.getState());

unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());

import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
// subscribe to the store
// subscribe yields an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

console.log(store);

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugAdded("bug 2"));

store.dispatch(bugResolved(2));

store.dispatch(bugRemoved(1));

unsubscribe();

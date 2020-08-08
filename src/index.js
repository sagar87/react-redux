import store from "./store";

import * as actions from "./actions";

store.subscribe(() => console.log("store changed"));

store.dispatch(actions.bugAdded("But 1"));
store.dispatch(actions.bugAdded("But 5"));
store.dispatch(actions.bugAdded("But 2"));
store.dispatch(actions.bugAdded("But 3"));
store.dispatch(actions.bugAdded("But 4"));
console.log(store.getState());

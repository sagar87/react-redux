import configureStore from "./store/configureStore";

import { projectAdded } from "./store/projects";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getCachedUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
  loadBugs,
  addBug,
  resolveBug,
  assignBugToUser,
} from "./store/bugs";

import * as actions from "./store/api";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => console.log("store changed"));

store.dispatch(loadBugs());

store.dispatch(userAdded({ name: "John" }));
store.dispatch(userAdded({ name: "Mary" }));
store.dispatch(userAdded({ name: "Coman" }));

setTimeout(() => store.dispatch(assignBugToUser(1, 2)), 2000);
//setTimeout(() => store.dispatch(loadBugs()), 2000);

// store.dispatch({ type: "error", payload: { message: "Oh gosh" } });

// store.dispatch(userAdded({ name: "Sally" }));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));

// store.dispatch(bugAssignedToUser({ userId: 2, bugId: 3 }));

// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// store.dispatch(projectAdded({ name: "Project 1" }));

// console.log(store.getState());

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());

// console.log("uncached", x === y);

// const a = getCachedUnresolvedBugs(store.getState());
// const b = getCachedUnresolvedBugs(store.getState());

// console.log("cached", a === b);

// const bugs = getBugsByUser(2)(store.getState());
// console.log(bugs);

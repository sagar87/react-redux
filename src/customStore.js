import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // Call reducer to get the state to update the state
    state = reducer(state, action);
    // let the listeners know
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);

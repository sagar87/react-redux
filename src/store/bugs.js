import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      return bugs.listfilter((bug) => bug.id !== action.payload.id);
    },
    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
  },
});

const {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action creators

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url: "/bugs",
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url: "/bugs",
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

export const resolveBug = (id) =>
  apiCallBegan({
    url: `/bugs/${id}`,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type,
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: `/bugs/${bugId}`,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

// export const loadBugs = () =>
//   apiCallBegan({
//     url: "/bugs",
//     onStart: bugsRequested.type,
//     onSuccess: bugsReceived.type,
//     onError: bugsRequestFailed.type,
//   });

// selectors unmemoized
export const getUnresolvedBugs = (state) =>
  state.entities.bugs.filter((bug) => !bug.resolved);

export const getCachedUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getCachedUnresolvedProjectBugs = createSelector(
  (state) => state.entities.bugs,
  (projects) => state.enitities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

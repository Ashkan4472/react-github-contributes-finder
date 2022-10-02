import { PayloadAction } from "@reduxjs/toolkit";
import { CollaboratorsResponseType } from "../../api/octokit";
import { CollabState } from "./slice";

export const collabFetchPending = (
  state: CollabState
) => {
  state.error = null;
  state.status = 'loading';
}

export const collabFetchFulfilled = (
  state: CollabState,
  action: PayloadAction<CollaboratorsResponseType>
) => {
  state.collabs = action.payload.data;
  state.status = 'idle';
}

export const collabFetchRejected = (
  state: CollabState,
  action: PayloadAction<any>
) => {
  state.error = action.payload;
  state.status = 'error';
}

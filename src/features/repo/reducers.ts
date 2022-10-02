import { PayloadAction } from "@reduxjs/toolkit";
import { SearchReposResponseType } from "../../api/octokit";
import { RepoState } from "./slice";

export const repoFetchPending = (
  state: RepoState,
) => {
  state.error = null;
  state.status = 'loading';
}

export const repoFetchFulfilled = (
  state: RepoState,
  action: PayloadAction<SearchReposResponseType>
) => {
  const data = action.payload.data;
  state.totalCount = data.total_count;
  state.repos = data.items;
  state.status = data.items.length === 0
    ? 'done'
    : 'idle';
}

export const repoFetchRejected = (
  state: RepoState,
  error: PayloadAction<any>
) => {
  console.error(error);
  state.error = "Some Error happened";
  state.status = "error";
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collaborators, searchRepo, SearchReposResponseType } from "../../api/octokit";
import { repoFetchFulfilled, repoFetchPending, repoFetchRejected } from "./reducers";

export interface RepoState {
  repos: SearchReposResponseType["data"]["items"]
  totalCount: SearchReposResponseType["data"]["total_count"],
  status: 'idle' | 'loading' | 'error' | 'done',
  error: string | null;
}

const initialState: RepoState = {
  repos: [],
  totalCount: 0,
  status: 'idle',
  error: null,
}

export const fetchRepos = createAsyncThunk(
  'repos/fetchRepos',
  async (arg: { repoName: string, pageNumber?: number }) => {
    return (await searchRepo(arg.repoName, arg.pageNumber));
  },
)

export const fetchCollabrators = createAsyncThunk(
  'collabrators/fetchCollabrators',
  async (arg: { owner: string, repoName: string }) => {
    console.log(process.env.REACT_APP_GITHUB_TOKEN)
    const result = await collaborators(arg.owner, arg.repoName);
    console.log(result);
  }
)

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRepos.pending, repoFetchPending)
      .addCase(fetchRepos.fulfilled, repoFetchFulfilled)
      .addCase(fetchRepos.rejected, repoFetchRejected)
  },
})

// NOTE: uncomment code below if you had any reducer in slice
// export const { } = repoSlice.actions;

export default repoSlice.reducer
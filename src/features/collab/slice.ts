import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collaborators, CollaboratorsResponseType } from '../../api/octokit';
import {
  collabFetchFulfilled,
  collabFetchPending,
  collabFetchRejected,
} from './reducers';

export interface CollabState {
  collabs: CollaboratorsResponseType['data'];
  status: 'idle' | 'loading' | 'error';
  error: string | null;
}

const initialState: CollabState = {
  collabs: [],
  status: 'idle',
  error: null,
};

export const fetchCollaborators = createAsyncThunk(
  'collaborators/fetchCollabrators',
  async (arg: { owner: string; repoName: string, pageNumber?: number }) => {
    return (await collaborators(arg.owner, arg.repoName, arg.pageNumber));
  }
);

export const collabSlice = createSlice({
  name: 'collab',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCollaborators.pending, collabFetchPending)
      .addCase(fetchCollaborators.fulfilled, collabFetchFulfilled)
      .addCase(fetchCollaborators.rejected, collabFetchRejected);
  },
});

// NOTE: uncomment code below if you had any reducer in slice
// export const { } = repoSlice.actions;

export default collabSlice.reducer;

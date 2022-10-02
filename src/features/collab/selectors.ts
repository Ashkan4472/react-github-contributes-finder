import { RootState } from "../../app/store";

export const selectCollabCollabs = (state: RootState) => state.collab.collabs;
export const selectCollabStatus = (state: RootState) => state.collab.status;
export const selectCollabError = (state: RootState) => state.collab.error;

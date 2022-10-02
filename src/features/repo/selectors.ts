import { RootState } from "../../app/store";

export const selectRepoItems = (state: RootState) => state.repo.repos;
export const selectRepoTotalCount = (state: RootState) => state.repo.totalCount;
export const selectRepoStatus = (state: RootState) => state.repo.status;
export const selectRepoError = (state: RootState) => state.repo.error;

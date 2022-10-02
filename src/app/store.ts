import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import repo from '../features/repo/slice';
import collab from '../features/collab/slice';

export const store = configureStore({
  reducer: {
    repo,
    collab,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

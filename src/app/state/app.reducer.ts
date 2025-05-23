import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const initialState = {
  // your initial global state here
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.loadApp, (state) => ({
    ...state,
    // maybe loading: true
  })),
  on(AppActions.loadAppSuccess, (state, { data }) => ({
    ...state,
    // update with loaded data
  })),
  on(AppActions.loadAppFailure, (state, { error }) => ({
    ...state,
    // handle error
  }))
);

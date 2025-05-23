import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAppState = createFeatureSelector<any>('app');

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);

// add more selectors as needed

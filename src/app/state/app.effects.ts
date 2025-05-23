import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AppActions from './app.actions';
// import your service here

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    // private apiService: ApiService
  ) {}

  loadApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadApp),
      mergeMap(() =>
        // this.apiService.getData().pipe(
        of({ data: 'sample data' }).pipe( // mock API call
          map((response) => AppActions.loadAppSuccess({ data: response.data })),
          catchError((error) => of(AppActions.loadAppFailure({ error })))
        )
      )
    )
  );
}

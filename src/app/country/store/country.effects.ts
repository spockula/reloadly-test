import * as fromUsers from '../../country/store/action'
import { MainService } from '../../services/main.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CountryEffects {
  constructor(private mainService: MainService, private actions$: Actions, private router: Router) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsers.CountryActionTypes.GetCountryLoad),
      mergeMap(() =>
      this.mainService.fetchCountries().pipe(
        map((countries: any) => new fromUsers.GetCountrySuccess(countries)),
              catchError((error) =>
                  of(new fromUsers.GetCountryFail(error)))
          )
      )));
}

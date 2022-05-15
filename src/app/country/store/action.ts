import { ICountries } from '../../interfaces/countries.interface';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum CountryActionTypes {
  GetCountryLoad = '[Country] Get Country',
  GetCountrySuccess = '[Country] Get Country Success',
  GetCountryFail = '[Country] Get Country Fail',
  SearchAction = '[Search] Search',
  GetSingleCountry = '[Search] Get single country details',
  routeAction = '[Route] Save route'
}

export class GetCountryLoad implements Action {
  public readonly type = CountryActionTypes.GetCountryLoad;
}

export class GetCountrySuccess implements Action {
  public type = CountryActionTypes.GetCountrySuccess;
  constructor(public payload: ICountries[] | ICountries) {}
}

export class SearchAction implements Action {
  public type = CountryActionTypes.SearchAction;
  constructor(public payload: any) {}
}

export class GetSingleCountry implements Action {
  public type = CountryActionTypes.GetSingleCountry;
  constructor(public payload: any) {}
}

export class GetCountryFail implements Action {
  public readonly type = CountryActionTypes.GetCountryFail;
  constructor(public error: HttpErrorResponse) { }
}

export class SaveRoute implements Action {
  public readonly type = CountryActionTypes.routeAction;
  constructor(public payload: string) {}
}


export type CountryActions = GetCountryLoad 
| GetCountrySuccess | GetCountryFail | SearchAction | SaveRoute;

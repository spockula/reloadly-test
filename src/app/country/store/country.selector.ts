import { ICountryState } from './countries-reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

const getCountryState = createFeatureSelector<ICountryState>('countries');

export const allCountries = createSelector(
  getCountryState,
  (state: ICountryState) => {
    return state;
});

export const searchedCountries = createSelector(getCountryState, (state: ICountryState) => {
  return state.searchedCountries;
});

export const singleCountry = createSelector(getCountryState, (state: ICountryState) => {
  return state.singleCountry;
});

export const routerState = createSelector((state: ICountryState) => state.countries, value => value)


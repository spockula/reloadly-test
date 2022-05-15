import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryEffects } from './store/country.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { countryReducer } from './store/countries-reducer';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ICountries } from '../interfaces/countries.interface';



@NgModule({
  declarations: [
    ListCountriesComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    StoreModule.forFeature('countries', countryReducer),
    EffectsModule.forFeature([CountryEffects])
  ],
  exports: [ListCountriesComponent, CountryDetailsComponent]
})
export class CountryModule { }
export interface AppState {
  readonly countries: ICountries[];
}

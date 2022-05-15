import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country/country-details/country-details.component';
import { ListCountriesComponent } from './country/list-countries/list-countries.component';

const routes: Routes = [
  {
    path: '',
    component: ListCountriesComponent
  },
  {
    path: 'details/:name',
    component: CountryDetailsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

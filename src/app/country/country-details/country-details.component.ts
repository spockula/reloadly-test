import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveRoute, GetSingleCountry } from './../store/action';
import { singleCountry } from '../store/country.selector';
import * as fromUsers from '../../country/store/countries-reducer'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryDetails: any;
  constructor(private store: Store<fromUsers.ICountryState>,
    private activatedRoute: ActivatedRoute, private router: Router) { 
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameter => {
      this.store.dispatch(new SaveRoute(parameter['name'])); //access index signature with ['name']
      this.store.dispatch(new GetSingleCountry(parameter['name']))
      this.store.select(singleCountry).subscribe((res: any) => {
        this.countryDetails = res;
      })

    })
  }

}

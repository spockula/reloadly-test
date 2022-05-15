import { GetCountryLoad, SearchAction, SaveRoute } from './../store/action';
import { Component, OnInit } from '@angular/core';
import { ICountries } from 'src/app/interfaces/countries.interface';
import { MainService } from 'src/app/services/main.service';
import { Store, select } from '@ngrx/store';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromUsers from '../../country/store/countries-reducer'
import { allCountries, routerState, searchedCountries } from '../store/country.selector';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  storeSelector: any;
  public isLoading: boolean = false;
  filteredRegions = [{
    name: 'Africa',
    id: 1
    },
    {
      name: 'Americas',
      id: 2
    },
    {
      name: 'Asia',
      id: 3
    },

    {
      name: 'Europe',
      id: 4
    },
    {
      name: 'Oceania',
      id: 5
    }
  ];
  selectedRegion: string = '';
  searchWord: string = '';
  countries$: Observable<ICountries[]> | undefined;
  filteredCountries: ICountries [] = [];
  visitedCountries: ICountries [] = [];

  constructor(private router: Router, private mainService: MainService,
    private store: Store<fromUsers.ICountryState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(new GetCountryLoad());
    this.store.pipe(select(allCountries)).subscribe((res: any) => {
      this.countries$ = of(res.countries);
    });
    this.store.select(routerState).subscribe((data: any) => {
      this.visitedCountries = data.visitedCountries;
      console.log('here', this.visitedCountries)
    });
  }

  searchCountries(searchWord: string) {
    const country = searchWord;
    if (country !== '') {
      this.store.dispatch(new SearchAction(country))
      this.store.select(searchedCountries).subscribe((res: any) => {
        this.countries$ = of(res);
      })
    }  else if (country === '') {
      this.store.pipe(select(allCountries)).subscribe((res: any) => {
        this.countries$ = of(res.countries);
      });
    }

  }

  regionFilter(e: any) {
    this.selectedRegion = e.target.value;
    if (this.selectedRegion !== '') {
      this.store.dispatch(new SearchAction(this.selectedRegion))
      this.store.select(searchedCountries).subscribe((res: any) => {
        this.countries$ = of(res);
      })
    } else {
      this.store.pipe(select(allCountries)).subscribe((res: any) => {
        this.countries$ = of(res.countries);
      });
    }
  }

  viewDetails(country: any) {
    const queryParams = country;
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/details/'+ country.name.common], { state: { countryDetail: queryParams } });
  }

}

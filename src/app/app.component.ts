import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './services/main.service';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICountries } from './interfaces/countries.interface';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reloadly-test';
  countries$: Observable<ICountries[]> | undefined;
  constructor(private router: Router, private mainService: MainService, private store: Store<AppState>) {
  }

  ngOnInit(): void {

    // this.mainService.fetchCountries().subscribe((response: any) => {
    //   console.log('me', response)
    // })
  }
}

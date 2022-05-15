import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../config/main.config.const';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

constructor(public httpClient: HttpClient) { }

fetchCountries() {
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json');
  return this.httpClient.get(`${baseUrl.mainUrl}/all`, {headers});
}

}

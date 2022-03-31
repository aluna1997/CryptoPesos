import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PreciosService {

  API_URI = 'https://cryptopesos-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPrecios() {
    return this.http.get(this.API_URI + 'precios/');
  }

}

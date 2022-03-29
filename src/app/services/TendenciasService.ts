import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TendenciasService {

  API_URI = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getPrecios() {
    return this.http.get(this.API_URI + 'tendencias/');
  }

}

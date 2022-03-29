import { Component, OnInit } from '@angular/core';
import { PreciosService } from '../../services/PreciosService';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  precios: any;

  constructor(private preciosService: PreciosService) {
    this.precios = []
  }

  ngOnInit(): void {
    this.preciosService.getPrecios().subscribe(
      res => {
        this.precios = res;
        console.log(this.precios);
      },
    err => {console.error(err)})
  }

}

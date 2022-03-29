import { Component, OnInit } from '@angular/core';
import { TendenciasService } from '../../services/TendenciasService'

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {
  tendencias: any;

  constructor(private preciosService: TendenciasService) {
    this.tendencias = []
  }

  ngOnInit(): void {
    this.preciosService.getPrecios().subscribe(
      res => {
        this.tendencias = res;
        console.log(this.tendencias);
      },
    err => {console.error(err)})
  }
}

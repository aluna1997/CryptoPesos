import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cryptopesos';

  constructor(private router: Router){}

  redirecTo(nombre_componente: any) {
    this.router.navigate([nombre_componente]);
  }

  ngOnInit(): void {
    this.redirecTo('precios')
  }


}


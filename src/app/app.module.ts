import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreciosComponent } from './components/precios/precios.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';


@NgModule({
  declarations: [
    AppComponent,
    PreciosComponent,
    TendenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

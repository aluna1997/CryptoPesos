import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendenciasComponent } from '../app/components/tendencias/tendencias.component'
import { PreciosComponent } from '../app/components/precios/precios.component'

const routes: Routes = [{ path: 'precios',component: PreciosComponent},
                        { path: 'tendencias',component: TendenciasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

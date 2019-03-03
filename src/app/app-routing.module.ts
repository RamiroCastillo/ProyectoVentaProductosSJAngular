import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { AppComponent } from './app.component';
import { RecetasComponent } from './Componentes/recetas/recetas.component';
import { OfertasComponent } from './Componentes/ofertas/ofertas.component';
import { PuntosVentaComponent } from './Componentes/puntos-venta/puntos-venta.component';
import { EventosComponent } from './Componentes/eventos/eventos.component';
import { ContactosComponent } from './Componentes/contactos/contactos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Productos', component: ProductoComponent },
  { path: 'Recetas', component: RecetasComponent },
  { path: 'Ofertas', component: OfertasComponent },
  { path: 'Puntos-de-Venta', component: PuntosVentaComponent },
  { path: 'Eventos', component: EventosComponent },
  { path: 'Contactos', component: ContactosComponent },
  { path: '**', component: AppComponent }
  //{ path: 'three/:id', component: PageThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

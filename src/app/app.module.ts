import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarLateralComponent } from './Componentes/nav-bar-lateral/nav-bar-lateral.component';
import { NavbarSuperiorComponent } from './Componentes/nav-bar-lateral/navbar-superior/navbar-superior.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { RecetasComponent } from './Componentes/recetas/recetas.component';
import { OfertasComponent } from './Componentes/ofertas/ofertas.component';
import { PuntosVentaComponent } from './Componentes/puntos-venta/puntos-venta.component';
import { EventosComponent } from './Componentes/eventos/eventos.component';
import { ContactosComponent } from './Componentes/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarLateralComponent,
    NavbarSuperiorComponent,
    ProductoComponent,
    RecetasComponent,
    OfertasComponent,
    PuntosVentaComponent,
    EventosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

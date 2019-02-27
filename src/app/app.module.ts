import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarLateralComponent } from './Componentes/nav-bar-lateral/nav-bar-lateral.component';
import { NavbarSuperiorComponent } from './Componentes/nav-bar-lateral/navbar-superior/navbar-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarLateralComponent,
    NavbarSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

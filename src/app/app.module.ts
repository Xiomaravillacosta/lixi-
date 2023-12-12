import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { EscogeBitaComponent } from './componentes/escoge-bita/escoge-bita.component';
import { PreguntasfreComponent } from './componentes/preguntasfre/preguntasfre.component';
import { DisenabitComponent } from './componentes/disenabit/disenabit.component';
import { BtnprincipalesComponent } from './componentes/btnprincipales/btnprincipales.component';
import { DahsboardComponent } from './componentes/dahsboard/dahsboard.component';
import { MenulateralComponent } from './componentes/menulateral/menulateral.component';
import { MenusuperiorComponent } from './componentes/menusuperior/menusuperior.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    FooterComponent,
    QuienesSomosComponent,
    EscogeBitaComponent,
    PreguntasfreComponent,
    DisenabitComponent,
    BtnprincipalesComponent,
    DahsboardComponent,
    MenulateralComponent,
    MenusuperiorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

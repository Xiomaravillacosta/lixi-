import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { PreguntasfreComponent } from './componentes/preguntasfre/preguntasfre.component';
import { EscogeBitaComponent } from './componentes/escoge-bita/escoge-bita.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},
  {path:"quienesSomos",component:QuienesSomosComponent,pathMatch:"full"},
  {path:"preguntasfre",component:PreguntasfreComponent,pathMatch:"full"},
  {path:"escogeBita",component:EscogeBitaComponent,pathMatch:"full"},
  {path:"footer",component:FooterComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

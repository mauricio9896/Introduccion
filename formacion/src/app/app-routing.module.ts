import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [

  { path: 'menu', component: SiderbarComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", pathMatch: "full", redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

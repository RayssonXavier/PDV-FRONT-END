import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardaTelaLoginService } from './shared/service/guarda-tela-login.service';

const routes: Routes = [
  {path:'login', component:LoginComponent, canActivate: [GuardaTelaLoginService]},
  {path:'home', component:HomeComponent, canActivate:[AuthGuardServiceService]},
  {path:'categoria', component:CategoriaComponent, canActivate:[AuthGuardServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaModule } from '../categoria/categoria.module';
import { HomeComponent } from './home.component';
import { MenuAreaPrincipalModule } from '../menu-area-principal/menu-area-principal.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CategoriaModule,
    MenuAreaPrincipalModule
  ]
})
export class HomeModule { }

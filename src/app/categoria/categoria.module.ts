import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { MenuAreaPrincipalModule } from '../menu-area-principal/menu-area-principal.module';



@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    MenuAreaPrincipalModule
  ]
})
export class CategoriaModule { }

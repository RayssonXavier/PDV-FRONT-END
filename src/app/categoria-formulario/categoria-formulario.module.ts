import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaFormularioComponent } from './categoria-formulario.component';
import { LoadingModule } from '../loading/loading.module';
import { MenuAreaPrincipalModule } from '../menu-area-principal/menu-area-principal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ CategoriaFormularioComponent],
  imports: [
    CommonModule,
    LoadingModule,
    MenuAreaPrincipalModule,
    ReactiveFormsModule,
  ]
})
export class CategoriaFormularioModule { }

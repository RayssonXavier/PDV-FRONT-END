import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CategoriaModule { }

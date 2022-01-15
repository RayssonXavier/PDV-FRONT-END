import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports:[
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }

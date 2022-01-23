import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAreaPrincipalComponent } from './menu-area-principal.component';



@NgModule({
  declarations: [MenuAreaPrincipalComponent],
  imports: [
    CommonModule
  ],
  exports:[MenuAreaPrincipalComponent]
})
export class MenuAreaPrincipalModule { }

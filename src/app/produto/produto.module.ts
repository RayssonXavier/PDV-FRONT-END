import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { MenuAreaPrincipalModule } from '../menu-area-principal/menu-area-principal.module';
import { LoadingModule } from '../loading/loading.module';
import { ModalModule } from '../shared/componentes/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    MenuAreaPrincipalModule,
    LoadingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    ]
})
export class ProdutoModule { }

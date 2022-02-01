import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ProdutoComponent } from './produto/produto.component';
import { HomeModule } from './home/home.module';
import { LoadingModule } from './loading/loading.module';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { CategoriaFormularioModule } from './categoria-formulario/categoria-formulario.module';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
    CategoriaFormularioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

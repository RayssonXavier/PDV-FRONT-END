import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {
  barraNavegacao = {menu: 'Categoria', rota: 'categoria-formulario', submenu: 'Cadastro'};
  constructor() { }

  ngOnInit(): void {
  }

}

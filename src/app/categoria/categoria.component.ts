import { Component, OnInit } from '@angular/core';
import { Categoria } from '../home/teste';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  readonly barraNavegacao = {menu: 'Categoria', rota: 'categoria', submenu: 'Lista'};
  constructor(private service: CategoriaService) { }
  
  categorias: Categoria[] = [];
  
  ngOnInit(): void {
    this.listCategoria();
  }

  listCategoria(): void {
    this.service.listCategoria().subscribe(
      {
        next: (response:Categoria[])=> {
            this.categorias = response;
        },
        error: (error)=>{
            console.log(error.error);
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../home/teste';
import { LoadingService } from '../loading/loading.service';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  readonly barraNavegacao = {menu: 'Categoria', rota: 'categoria', submenu: 'Lista'};
  constructor(
    private service: CategoriaService,
    private loadingService: LoadingService,
    private router: Router ) { }
  
  categorias: Categoria[] = [];

  ngOnInit(): void {
    this.listCategoria();
  }

  rota(rota:string):void {
    void this.router.navigate([rota]);
  }

  listCategoria(): void {
    this.loadingService.loading = true;
    console.log(this.loadingService.loading);
    this.service.listCategoria().subscribe(
      {
        next: (response:Categoria[])=> {
            this.categorias = response;
            this.loadingService.loading = false;
        },
        error: (error)=>{
            console.log(error.error);
        }
      }
    )
  }

}

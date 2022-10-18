import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Produto } from '../shared/model/produto-model';
import { CrudApiService } from '../shared/service/crud-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudApiService<Produto>{

  constructor(http: HttpClient ) {
    super(http, "produto");
   }

  async listarProdutos(): Promise<Produto[]> {
    return await lastValueFrom(this.list());
  }

  async cadastrarProduto(produto: Produto): Promise<Produto> {
    return await lastValueFrom(this.create(produto));
  }

  async deletarProduto(produto: Produto): Promise<Produto> {
    return await lastValueFrom(this.delete(produto.id));
  }

  async atualizarProduto(produto: Produto): Promise<Produto> {
    return await lastValueFrom(this.edit(produto));
  }

}

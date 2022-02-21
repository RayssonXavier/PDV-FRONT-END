import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../shared/model/produto-model';
import { baseApiService } from '../shared/service/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends baseApiService{
  private api = "/produto/list"
  
  constructor(http: HttpClient ) {
    super(http);
   }

   listProdutos(): Observable<Produto[]> {
    
    return this.http.get<Produto[]>(
      `${this.BaseApi}${this.api}`,{headers: new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `${this.retornaToken()}`)
       }
    )
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${this.BaseApi}/produto/create`,
        produto,
        {headers: new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `${this.retornaToken()}`)
      }, 
    )
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${this.BaseApi}/produto/edit`,
        produto,
        {headers: new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `${this.retornaToken()}`)
      }, 
    )
  }
}

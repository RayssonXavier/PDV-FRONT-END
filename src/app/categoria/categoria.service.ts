import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../home/teste';
import { baseApiService } from '../shared/service/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends baseApiService{
  private api = "/produto-categoria/list"
  
  constructor(http: HttpClient ) {
    super(http);
   }

   listCategoria(): Observable<Categoria[]> {
    
    return this.http.get<Categoria[]>(
      `${this.BaseApi}${this.api}`,{headers: new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `${this.retornaToken()}`)
       }
    )
  }
}

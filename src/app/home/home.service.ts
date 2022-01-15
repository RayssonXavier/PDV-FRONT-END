import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiService } from '../shared/service/base-api.service';
import { Categoria } from './teste';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends baseApiService{
  private api = "/produto-categoria/list"
  constructor(private httpCli: HttpClient) { 
    super(httpCli);
  }

  listCategoria(): Observable<Categoria> {
    
    return this.httpCli.get<Categoria>(
      `${this.BaseApi}${this.api}`,{headers: new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `${this.retornaToken()}`)
       }
    )
  }
}

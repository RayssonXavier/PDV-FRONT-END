import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiService } from '../shared/service/base-api.service';
import { AutorizacaoUser } from './model/autorizacaoUse.model';
import { Usuario } from './model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends baseApiService{
  private api = '/account/login'
  constructor(private httpCli: HttpClient) { 
    super(httpCli)
  }

  login(user: Usuario): Observable<AutorizacaoUser> {
    return this.httpCli.post<AutorizacaoUser>(
      `${this.BaseApi}${this.api}`,user,{headers: new HttpHeaders()
      .set('content-type', 'application/json;charset=utf-8')
      .set('Access-Control-Allow-Origin', '*')}
    );
  }
}

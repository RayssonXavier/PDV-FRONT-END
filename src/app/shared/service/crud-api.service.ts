import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class CrudApiService<Type> extends baseApiService {

  entityName: string;

  constructor(http: HttpClient, @Inject('entityName') entityName: string) {
    super(http);
    this.entityName = entityName;
  }

  list(): Observable<Type[]> {
    
    return this.http.get<Type[]>(
      `${this.BaseApi}/${this.entityName}/list`,{headers: this.retornaHeader()}
    )
  }

  create(entity: Type): Observable<Type> {
    return this.http.post<Type>(
      `${this.BaseApi}/${this.entityName}/`,
        entity,
        {headers: this.retornaHeader()}
    )
  }

  edit(entity: Type): Observable<Type> {
    return this.http.put<Type>(
      `${this.BaseApi}/${this.entityName}/`,
      entity,
      {headers: this.retornaHeader()}
    )
  }

  delete(id: string): Observable<Type> {
    return this.http.delete<Type>(
      `${this.BaseApi}/${this.entityName}/${id}`,
      {headers: this.retornaHeader()}
    )
  }


}

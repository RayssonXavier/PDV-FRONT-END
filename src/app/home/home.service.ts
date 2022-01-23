import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApiService } from '../shared/service/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends baseApiService{
 
  constructor(private httpCli: HttpClient) { 
    super(httpCli);
  }

}

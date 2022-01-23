import { HttpClient } from "@angular/common/http";

export abstract class baseApiService{
    public BaseApi = 'https://pdvnetwebapi.azurewebsites.net/api';

    constructor(public http: HttpClient){}

    public retornaToken():string {
        const token = <string>(
            localStorage.getItem('token')
            );

        return `Bearer ${token.split('"')[1]}`
    }
}
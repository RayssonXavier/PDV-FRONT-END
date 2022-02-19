import { HttpClient } from "@angular/common/http";

export abstract class baseApiService{
    public BaseApi = 'https://pdvnetwebapi.azurewebsites.net/api';

    // public BaseApi = 'https://localhost:44350/api';

    constructor(public http: HttpClient){}

    public retornaToken():string {
        const token = <string>(
            localStorage.getItem('token')
            );

        return `Bearer ${token}`
    }
}
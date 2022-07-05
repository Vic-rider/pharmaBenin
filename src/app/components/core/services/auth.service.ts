import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private _http: HttpClient,
    ) { }

    login(email:string, password: string) {
        return this._http.post(environment.baseUrl + 'auth/local', {identifier: email, password: password})
    }

    register() {

    }

    logOut() {
        localStorage.removeItem(environment.PB_token);
        localStorage.removeItem(environment.PB_userData);
        location.reload();
    }

    setToken(token:string) {
        localStorage.setItem(environment.PB_token, token);
    }

    setUserDatas(datas:any) {
        localStorage.setItem(environment.PB_userData, JSON.stringify(datas) )
    }

}

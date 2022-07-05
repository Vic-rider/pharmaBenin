import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmaService {

    constructor(
        private _http: HttpClient,
    ) { }

    getPharmaList() {
        return this._http.get(environment.baseUrl + 'pharmacies')
    }

}

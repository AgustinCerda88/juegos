import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

    constructor(private http: HttpClient) { }
    
    getExchanges(){
      return this.http.get('https://api.vatcomply.com/rates')
    }
    
    getOtherEx(base: any){
      return this.http.get(`https://api.vatcomply.com/rates?base=${base}`)
    }

}

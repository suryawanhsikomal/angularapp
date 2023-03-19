import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
 url ='https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';

  constructor(private httpClient: HttpClient) {
     
   }
   getFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '7e98d8988cmshae7c1ac3b870b1ap17e90bjsn168d6767f597',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    });
   return this.httpClient.get(this.url, { headers: headers});
  }
    
}

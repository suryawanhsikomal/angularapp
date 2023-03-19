import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from '@angular/core';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

   apiUrl = 'https://jsonplaceholder.typicode.com/users';
   
  constructor( private httpClient : HttpClient) { }

  getUsers(){
   return  this.httpClient.get(this.apiUrl);
  }


}

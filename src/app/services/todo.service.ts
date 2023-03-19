import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:3000/todos';
  constructor(private httpClient : HttpClient) { }

  //create method
  create( data : any ){
    return this.httpClient.post(this.url, data);
  }
  //read operation

  list(){
     return this.httpClient.get(this.url);
  }

  //update
update(id :any, data){
   let API_URL = `${this.url}/${id}`;
   console.log(API_URL);
   
   return this.httpClient.put(API_URL, data)
} 
//delete
delete(id: any){
  let API_URL = `${this.url}/${id}`;
  return this.httpClient.delete(API_URL);
}
}

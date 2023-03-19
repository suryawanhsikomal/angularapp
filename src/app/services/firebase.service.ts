import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url ='https://angular2023-de3f6-default-rtdb.firebaseio.com/';

  constructor( private httpClient : HttpClient) { }

  createPost(){
    let postData = {
      title :'this is firebase example',
      content :'we are calling angular'
    }
  return this.httpClient.post(this.url + 'posts.json', postData);
  }
  getPostDateFirebas(){
    return this.httpClient.get(this.url + 'posts.json');
  }
}

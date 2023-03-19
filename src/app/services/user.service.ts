// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 
 userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient ) {}
  getPost():Observable<any>{
    return this.http.get<Users>(this.userUrl);
  }

  getPostById(id:number){
    return this.http.get(this.userUrl + '/'+ id);
 

}
}

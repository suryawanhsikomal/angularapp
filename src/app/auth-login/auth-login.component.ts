import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  //di
  constructor( private authService : AuthService, private route : Router) { }
  msg;
  ngOnInit() {
  }
  login(username, password){
    var result= this.authService.checkUser(username, password)
    if(result == true){
      this.route.navigate(['/productNew']);
    }
    else{
   this.msg= 'Invalide username or password';
    }
  }

}

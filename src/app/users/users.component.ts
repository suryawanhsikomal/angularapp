import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
//Di
export class UsersComponent implements OnInit {
   userDetail : Users[] =[];
  constructor( private usersservice :UserService) { }

  ngOnInit() {
    this.usersservice.getPost().subscribe(res =>{
      this.userDetail = res;
      console.log('user data', res);
      
    })
  }

}

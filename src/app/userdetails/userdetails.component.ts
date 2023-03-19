import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userarr;
  constructor( private route : ActivatedRoute, private userService:UserService ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userService.getPostById(id).subscribe(res =>{
      console.log('Get User by id', res);
       this.userarr = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  userName;
  constructor(private _utilityServuce : UtilityService) { 
    this._utilityServuce.userName.subscribe(res =>{
      console.log('Data coming from utility',res);
      this.userName = res;
    });
  }

  ngOnInit() {
  }
  updateUserName(uname){
    this.userName = uname.value;
   console.log(uname.value);
   
   this._utilityServuce.userName.next(uname.value);
  }
  

}

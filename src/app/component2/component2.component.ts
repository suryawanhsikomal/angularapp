import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
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

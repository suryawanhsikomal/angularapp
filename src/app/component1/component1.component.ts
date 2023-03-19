import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
   userName;

  constructor( private _utilityServuce : UtilityService) { 
     this._utilityServuce.userName.subscribe(res =>{
      console.log('Data coming from services:', res);
      this.userName = res;
     }, err =>{
      console.log('erroe is there:', err);
      
       
     })
  }

  ngOnInit() {
  }
  
  updateUserName(uname){
    this.userName = uname.value;
   console.log(uname.value);
   
   this._utilityServuce.userName.next(uname.value);
   
  }
  


}

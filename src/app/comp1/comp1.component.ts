import { Component, OnInit } from '@angular/core';
import { SubService } from '../services/sub.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  content;
  constructor(private sub :SubService ) {
    this.sub.content.subscribe(res =>{
      console.log(res);
      this.content = res;
      
    })
   }

  ngOnInit() {
  }

  sreach(c){
     this.content = c.value;
     console.log(c.value);
     this.sub.content.next(c.value);
     
  }

}

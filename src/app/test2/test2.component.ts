import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() child : string;
   count :number = 0;
   firstName :string = 'Rocky';
   userName : string = "";
  constructor() { }

  ngOnInit() {
    console.log("I am comming from parrent" , this.child);
  }
  onButtonClick(){
     let counts=this.count += 1;
     console.log(counts);  
  }
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  onClickButton(){
    this.userName = "";
  }

}

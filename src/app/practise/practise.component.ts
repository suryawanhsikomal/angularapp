import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  @Input()  child : string;
  constructor() { }

  ngOnInit() {
    console.log(this.child);
  }
  
   
}

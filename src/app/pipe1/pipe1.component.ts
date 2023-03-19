import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {

  todaysDate = new Date();

  price: number = 70000;

  employee = {
    empid: '1',
    empname: 'Jack'
  }

  constructor() { }

  ngOnInit() {
  }

}

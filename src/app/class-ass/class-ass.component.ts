import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ass',
  templateUrl: './class-ass.component.html',
  styleUrls: ['./class-ass.component.css']
})
export class ClassAssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayDetails = false;
  buttonClicks = [];
  totalClicks = 0;

  toggleButton() {
    this.displayDetails = true;
    this.buttonClicks.push(++this.totalClicks);
}
}

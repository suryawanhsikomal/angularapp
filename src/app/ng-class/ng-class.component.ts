import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  people : any = [
    {
      'name': 'Rahi',
      'div' : 'A'
    },
    {
      'name': 'Samrth',
      'div' : 'B'
    },
    {
      'name': 'Swaroop',
      'div' : 'A'
    },
    {
      'name': 'Riya',
      'div' : 'C'
    },
    {
      'name': 'Sarthak',
      'div' : 'B'
    },
    {
      'name': 'Vihan',
      'div' : 'C'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

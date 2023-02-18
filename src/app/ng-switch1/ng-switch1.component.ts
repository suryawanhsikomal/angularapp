import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch1',
  templateUrl: './ng-switch1.component.html',
  styleUrls: ['./ng-switch1.component.css']
})
export class NgSwitch1Component implements OnInit {

  selectedProduct: string;
  getProductValue(val) {
    console.log('seleced value from dropdown', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
  }

  constructor() { }

  ngOnInit() {
  }

}

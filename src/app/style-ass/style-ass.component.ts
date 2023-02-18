import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-ass',
  templateUrl: './style-ass.component.html',
  styleUrls: ['./style-ass.component.css']
})
export class StyleAssComponent implements OnInit {

  count :number = 0;
  onButtonClick(){
    let counts=this.count += 1;
    console.log(counts);  
 }

 onKeyUp(value) {
  console.log('$event', value.target.value)
}
  dish : any =[
    {
      'name':'Paniuri',
      'price': '25'
   
    },
    {
      'name':'dahipuri',
      'price': '30'
    },
    {
      'name':'bhel',
      'price': '25'
    },
    {
      'name':'ragadaPatis',
      'price': '30'
    },
    {
      'name':'shevpuri',
      'price': '30'
    },
    {
      'name':'kachori',
      'price': '20'
    },
    {
      'name':'samosa',
      'price': '20'
    },
  ]
  constructor() { }

  ngOnInit() {
  }
 

  }



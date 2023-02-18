import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gn-switch',
  templateUrl: './gn-switch.component.html',
  styleUrls: ['./gn-switch.component.css']
})
export class GnSwitchComponent implements OnInit {
  courses :any=[
    {
      id:'1' , 
    description:'Angular core',
     iconUrl:'https://angular.io/assets/images/logos/angular/angular.png' ,
     category:'INTERMIDIATE'
    },
    {
      id:'2' , 
    description:'javaschipt zero to hero',
     iconUrl:'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png' ,
     category:'BIGINNER'
    },
    {
      id:'3' , 
    description:'Typescript',
     iconUrl:'https://cdn.worldvectorlogo.com/logos/typescript-2.svg' ,
     category:'ADVANCE'
    },
    {
      id:'4' , 
    description:'HTML',
     iconUrl:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png' ,
     
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

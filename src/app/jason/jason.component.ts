import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';
import { MyServiceService } from '../services/my-service.service';


@Component({
  selector: 'app-jason',
  templateUrl: './jason.component.html',
  styleUrls: ['./jason.component.css']
})
export class JasonComponent implements OnInit {

  constructor(private myservice : MyServiceService , private demoService : DemoServiceService) { }

  // products: any;
  users ;
  namefind: string = '';
  // products = {};
  items ={};

  ngOnInit(): void {
    // this.products = this.myservice.products;
    this.items = this.myservice.products;
    this.demoService.getUsers().subscribe(res => {
      this.users = res;
     console.log('user api results', res);
    //  this.users = res;
    
   });
  }

}

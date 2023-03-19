import { Component, OnInit } from '@angular/core';
import { Emplyee } from './models/employee';
import { RapidapiService } from './services/rapidapi.service';
// import { Emplyee } from './models/employee';
// import { DemoServiceService } from './services/demo-service.service';
// import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  test ='Prperty binding variable';
  title = 'angularapp';
  name = 'Komal';

 parentToChild : string =" Hii  Dveloper this msg come from parent ";
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  empCount;
  data ={
    name:'codemind',
    dept:'IT',
    imageUrl:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    
  }
  financeData;
  // demoServiceService: any;
  constructor( private rapidapiService : RapidapiService){
    this.getValueFromServer();
  }
  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(res=>{
      console.log('rapid responce', res);
      this.financeData = res;
      
    })
    
  }
  getValueFromServer(){
    this.empCount = 100;

  }
  currentTime():any{
   let  date = new Date()
  return date;
  }
  // test1(){
  //   alert("Event Raised");
  // }
  onParent(val: Emplyee){
    console.log(`From Child to parent Emplyee:`,val); 
  }
  // test2(){
  //   alert("Event occure");
  // }
  showAll(val){
    console.log('From the child to parent all details of user are',val);
    
   }
   
   
} 

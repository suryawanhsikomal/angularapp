import { Component } from '@angular/core';
import { Emplyee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test ='Prperty binding variable';
  title = 'angularapp';
  name = 'Komal';

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
  constructor(){
    this.getValueFromServer();
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

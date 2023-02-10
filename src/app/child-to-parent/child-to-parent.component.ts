import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Emplyee } from '../models/employee';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
// @Output() fromChild : EventEmitter<string> = new EventEmitter<string>();
@Output() fromChild1 : EventEmitter<any> = new EventEmitter<any>();
 @Output() objFromChild : EventEmitter<Emplyee> = new EventEmitter<Emplyee>();

 person ={
    id: 100,
 fname: 'komal',
 lname: 'suryawanshi',
 city: 'Mumbai'
 }
 employee :Emplyee;

fullName:string = 'komal suryawanshi';
  fromChild: any;

  constructor() { }

  ngOnInit() {
  }
  sendToParent(){
    //this.fromChild.emit(this.fullName);
    this.employee = new Emplyee();
    this.employee.name = 'komal';
    this.employee.salary = 500000;
    this.objFromChild.emit(this.employee);
  }
  showDetails(){
    this.fromChild1.emit(this.person.id);
    this.fromChild1.emit(this.person.fname);
    this.fromChild1.emit(this.person.lname);
    this.fromChild1.emit(this.person.city);
  }
  }



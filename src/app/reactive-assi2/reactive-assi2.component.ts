import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assi2',
  templateUrl: './reactive-assi2.component.html',
  styleUrls: ['./reactive-assi2.component.css']
})
export class ReactiveAssi2Component implements OnInit {
  myReactiveForm: FormGroup;
  myReactiveForm1: FormGroup;
  // image= "https://i.pinimg.com/564x/84/77/49/847749560b5b8290f63622b241397cd2.jpg";
  //  image = 'https://img.freepik.com/free-icon/user_318-804790.jpg';
   
  
  constructor() { 
  this.createForm();
  this.detailForm();
  }
  ngOnInit() {
  }
  detailForm(){
    this.myReactiveForm1  = new FormGroup({
      'fullname' : new FormControl(null,[Validators.required]),
      'date' :  new FormControl(Validators.required),
       'gender' :new FormControl('Male',  Validators.required),
       'country' : new FormControl('country',Validators.required),
       'phone': new FormControl(null,Validators.required),
       'bio' : new FormControl(null, Validators.maxLength(256))
       
    })
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
    
      'username' : new FormControl(null,[Validators.required,Validators.minLength(5),
        Validators.maxLength(25),Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    'password' : new FormControl(null, [Validators.required, Validators.maxLength(5), 
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'cpassword' : new FormControl(null)
    })
   
    }
    OnSubmit() {
     
      console.log('My ReactiveForm', this.myReactiveForm.value)
     
    }
    OnSubmit1() {
     
      console.log('My ReactiveForm', this.myReactiveForm1.value)
     
    }
  

}

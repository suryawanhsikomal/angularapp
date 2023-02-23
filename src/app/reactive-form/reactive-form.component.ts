import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  isSubmitted:boolean=false;
  
  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDeatils': new FormGroup({
        'username' : new FormControl(null),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'courses':new FormControl('Angular'),
      'Gender':new FormControl('Female')
});
    
  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
}

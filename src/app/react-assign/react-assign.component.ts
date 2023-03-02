import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-assign',
  templateUrl: './react-assign.component.html',
  styleUrls: ['./react-assign.component.css']
})
export class ReactAssignComponent implements OnInit {
  reactAssign: FormGroup;

  isSubmitted:boolean=false;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm()
  {
     this.reactAssign = new FormGroup({
      'reactLogin' : new FormGroup({
        'email': new FormControl(null, [Validators.email, Validators.required])
      }),
      'password': new  FormControl(null, Validators.required),
       'date' : new FormControl(null, Validators.required),
        'subscription' : new FormControl('Advance'),
     });
    
    }
    OnSubmit() {
      this.isSubmitted=true;
      console.log('My ReactiveForm', this.reactAssign.value);
    }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  

  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails='';
  formData: any;
  isSubmitted: boolean;
  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.isSubmitted = true;
console.log(form);

 this.formData.email = form.value.email ;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');


// POST api/ Saveuser(formData);

  }

  
}


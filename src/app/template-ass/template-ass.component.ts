import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template-ass',
  templateUrl: './template-ass.component.html',
               
  styleUrls: ['./template-ass.component.css']
  
   
})
export class TemplateAssComponent implements OnInit {

  isSubmitted: boolean = false;
  formData : any= {
    fname: '',
    lname: '',
    ages: '',
    email: '',
    phone:'',
    cities:'',
    genders:'',
    password:''
  
  }
  defaultage = '17'
  defaultCity ='Mumbai';
  defaultGender='Male';
 
    // ages : number[] = [ 17, 18, 19, 20];
    cities :string[] = ['Mumbai', 'Kolkatata','Delhi','Pune'];
   


    genders = [ 
      {
        id: '1', value: 'Male'
      },
      {
        id: '2', value: 'Female'
      }
    ]
     

  constructor() { }

  ngOnInit() {
    
  }

  registration(form: NgForm) {
    this.isSubmitted = true;
console.log(form);

// form.controls['age'].setValue('17');
form.controls['gender'].patchValue('Male');
form.controls['city'].patchValue('Mumbai');
form.controls['age'].patchValue('17');

this.formData.fname = form.value.fname;
this.formData.lname = form.value.lname;
this.formData.age = form.value.age;
this.formData.email = form.value.email;
this.formData.phone = form.value.phone;
this.formData.city = form.value.city;
this.formData.gender = form.value.gender;
this.formData.password = form.value.password;
// this.formData.confirmPass = form.value.confirmPass;
}






}

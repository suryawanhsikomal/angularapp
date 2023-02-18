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

    ages : number[] = [ 17, 18, 19, 20];
    cities :string[] = ['Mumbai', 'Kolkatata','Delhi','Pune','Mumbai'];
   


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


this.formData.fName = form.value.fName;
this.formData.lName = form.value.lName;
this.formData.ages = form.value.ages;
this.formData.email = form.value.email;
this.formData.phone = form.value.phone;
this.formData.cities = form.value.cities;
this.formData.genders = form.value.genders;
this.formData.password = form.value.password;
// this.formData.confirmPass = form.value.confirmPass;
}


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
   
})
export class CustomerModule {
  constructor(){
    console.log('CustomerModule called');
    
  }
 }

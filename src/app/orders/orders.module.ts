import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CustomDirective } from '../custom.directive';
import { UtilityModule } from '../shared/utility/utility.module';




@NgModule({
  declarations: [
    OrderlistComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
   
  ]
})
export class OrdersModule { }

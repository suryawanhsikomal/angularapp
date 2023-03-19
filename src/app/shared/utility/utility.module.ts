import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from 'src/app/custom.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomDirective,

  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    CustomDirective
  ]
  
})
export class UtilityModule { }

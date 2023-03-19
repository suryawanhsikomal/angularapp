import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from '../camera/camera.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { ProductNewComponent } from '../product-new.component';
import { WatchComponent } from '../watch/watch.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from 'src/app/shared/utility/utility.module';




@NgModule({
  declarations: [
    ProductNewComponent,
    LaptopComponent,
    CameraComponent,
    MobileComponent,
    WatchComponent,
   

  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
   
  ]

})
export class ProductModule {
  constructor(){
    console.log('ProductModule called');
    
  }
 }

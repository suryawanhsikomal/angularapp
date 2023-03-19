import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { GnSwitchComponent } from './gn-switch/gn-switch.component';
import { NgSwitch1Component } from './ng-switch1/ng-switch1.component';
import { StyleComponent } from './style/style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { StyleAssComponent } from './style-ass/style-ass.component';
import { PractiseComponent } from './practise/practise.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ClassAssComponent } from './class-ass/class-ass.component';
import { TemplateformComponent } from './templateform/templateform.component';

import { TemplateAssComponent } from './template-ass/template-ass.component';
import { ReactAssignComponent } from './react-assign/react-assign.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveAssi2Component } from './reactive-assi2/reactive-assi2.component';
import { HttpClientModule } from '@angular/common/http';


import { UserService } from './services/user.service';
// import { Observable } from 'rxjs';

import { CustomPipe } from './custom.pipe';
import { Pipe1Component } from './pipe1/pipe1.component';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { JasonComponent } from './jason/jason.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { Userdetails1Component } from './userdetails1/userdetails1.component';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product-new/product/product.module';


import { TodoComponent } from './todo/todo.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { WikiComponent } from './wiki/wiki.component';








@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    ChildToParentComponent,
    NgforComponent,
    NgIfComponent,
    GnSwitchComponent,
    NgSwitch1Component,
    StyleComponent,
    NgClassComponent,
    StyleAssComponent,
    PractiseComponent,
   
    ClassAssComponent,
    TemplateformComponent,
    TemplateAssComponent,
    ReactAssignComponent,
    ReactiveFormComponent,
    ReactiveAssi2Component,
   
    CustomPipe,
    Pipe1Component,
    SearchPipe,
    ProductFilterComponent,
    JasonComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Comp1Component,
    Comp2Component,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    PageNotFoundComponent,
   
    DemopostComponent,
    DemopostdetailsComponent,
    UsersComponent,
    UserdetailsComponent,
    Userdetails1Component,
    TodoComponent,
    AuthLoginComponent,
    WikiComponent,
   
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrdersModule,
    ProductModule,
   
    
    
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule called');
    
  }
}

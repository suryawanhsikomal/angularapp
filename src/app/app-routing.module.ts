import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CameraComponent } from './product-new/camera/camera.component';
import { LaptopComponent } from './product-new/laptop/laptop.component';
import { MobileComponent } from './product-new/mobile/mobile.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { WatchComponent } from './product-new/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { WikiComponent } from './wiki/wiki.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
   {path:'home', component: HomeComponent},
  { path: 'aboutUs', component: AboutUsComponent}, // http://localhost:4200/aboutus
  { path: 'contactUs', component: ContactUsComponent },
  // {path:'productNew',   }, // single router outlet
  {path:'productNew',  canActivate:[AuthGuard], component:ProductNewComponent,  ///multiple router outlet
  children: [
  // {path:'', component: ProductNewComponent},  // single router outlet
  {path:'laptop', component: LaptopComponent},
  {path:'mobile', component: MobileComponent},
  {path:'camera', component: CameraComponent},
  {path:'watch',component: WatchComponent} 
  
  ]
},
  {path:'post' , component:DemopostComponent},
  {path:'postdetails/:id', component:DemopostdetailsComponent},
  { path:'users', component:UsersComponent},
  {path:'userdetails/:id', component:UserdetailsComponent},
  { path: 'userdetails1', component: UserdetailsComponent},
  { path: 'login', component: AuthLoginComponent},
  { path:'order', component:OrderlistComponent},
  {path:'todo', component: TodoComponent},
  // {path:'customer', component:CustomerListComponent},
  
  {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path : 'wiki', component: WikiComponent},
  
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

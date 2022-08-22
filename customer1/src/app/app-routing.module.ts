import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

import { SenderComponent } from './sender/sender.component';


const routes: Routes = [
   {path= '' , redirectTo:'payments' ,pathMatch:'full'},
  {path:"customer" , component: CustomerComponent},
  {path:"sender" , component: SenderComponent},
  {path:"Payments" , component:SenderComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  {path:"create" , component: CustomerComponent},
  {path:"update" , component: UpdatecustomerComponent},
  {path:"delete" , component: DeletecustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

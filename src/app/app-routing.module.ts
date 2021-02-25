import { LeadDetailComponent } from './header/new/lead-detail/lead-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { LeadsComponent } from './leads/leads.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './header/not-found/not-found.component';
import { CustomerDetailComponent } from './header/new/customer-detail/customer-detail.component';


const routes: Routes = [
  { path: 'new/lead-detail', component: LeadDetailComponent},
  { path: 'new/customer-detail', component: CustomerDetailComponent},
  { path: 'leads', component: LeadsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

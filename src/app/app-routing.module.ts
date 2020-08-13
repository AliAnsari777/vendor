import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { vendorManagementComponent } from './component/vendor-management/vendor-management/vendor-management.component';
 
const routes: Routes = [
  { path: 'validation', component: UserListComponent },
  { path: 'vendormgt', component: vendorManagementComponent },
  { path: 'registration', component: UserFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

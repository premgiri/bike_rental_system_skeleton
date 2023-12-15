import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details.component';

const routes: Routes = [
  { path: '', component: ProfileDetailsComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }

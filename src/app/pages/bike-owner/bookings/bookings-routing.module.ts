import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [
  { path: '', component: BookingsComponent, data: {
    // customBreadcrumb: 'Add Profile',
  }, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingRoutingModule { }

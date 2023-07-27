import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SidedbarComponent } from './sidedbar/sidedbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeskbookingComponent } from './deskbooking/deskbooking.component';
import { DeskavailabilityComponent } from './deskavailability/deskavailability.component';
import { TeamavailabilityComponent } from './teamavailability/teamavailability.component';
import { CabinavailabilityComponent } from './cabinavailability/cabinavailability.component';

const routes: Routes = [
  {path:'login',component:LoginpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'deskbooking',component:DeskbookingComponent},
  {path:'deskavailability',component:DeskavailabilityComponent},
  {path:'teamavailability',component:TeamavailabilityComponent},
  {path:'cabinavailability',component:CabinavailabilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

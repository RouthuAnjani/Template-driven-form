import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SidedbarComponent } from './sidedbar/sidedbar.component';
import { DeskbookingComponent } from './deskbooking/deskbooking.component';
import { DeskavailabilityComponent } from './deskavailability/deskavailability.component';
import { TeamavailabilityComponent } from './teamavailability/teamavailability.component';
import { CabinavailabilityComponent } from './cabinavailability/cabinavailability.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SidedbarComponent,
    DeskbookingComponent,
    DeskavailabilityComponent,
    TeamavailabilityComponent,
    CabinavailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

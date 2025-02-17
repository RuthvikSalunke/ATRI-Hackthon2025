import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OrganiserEventComponent } from './components/organiser-event/organiser-event.component';
import { VolunteerListComponent } from './components/volunteer-list/volunteer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganiserEventComponent,
    VolunteerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

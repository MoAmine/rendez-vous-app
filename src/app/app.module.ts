import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http'
import {FullCalendarModule} from 'primeng/fullcalendar';
import {CalendarModule} from 'primeng/calendar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './components/elements/examples/examples.module';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { AuthService } from './services/auth/auth.service';
import { RendezVousService } from './services/rendez-vous/rendez-vous.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AddrvComponent } from './components/add-rv/addrv/addrv.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    RendezVousComponent,
    DemandesComponent,
    SigninComponent,
    SignupComponent,
    AddrvComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    FullCalendarModule,
    CalendarModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RendezVousService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

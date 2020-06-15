import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service'
import { AddrvComponent } from './components/add-rv/addrv/addrv.component';
import { RendezVousListComponent } from './components/rendez-vous-list/rendez-vous-list.component';


const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: ComponentsComponent },
  { path: 'signin',     component: SigninComponent },
  { path: 'signup',           component: SignupComponent },
  { path: 'rendez-vous', canActivate: [AuthGuardService], component: RendezVousComponent },
  { path: 'demandes', canActivate: [AuthGuardService], component: DemandesComponent },
  { path: 'add-rendez-vous', canActivate: [AuthGuardService], component: AddrvComponent},
  { path: 'rendez-vous-list', canActivate: [AuthGuardService], component: RendezVousListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

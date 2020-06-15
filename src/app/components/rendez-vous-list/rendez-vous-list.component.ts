import { Component, OnInit, OnDestroy } from '@angular/core';
import { RendezVousService } from 'app/services/rendez-vous/rendez-vous.service';
import { Router } from '@angular/router';
import { RendezVous } from '../modal/Rendez-vous.modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit, OnDestroy {

  constructor(private rendezVousService: RendezVousService, private router: Router) { }

  rendezVous: any[];
  options: any;
  rendezVousSubscription: Subscription;
  
  ngOnInit() {
    this.rendezVousSubscription = this.rendezVousService.rendezVousSubject.subscribe(
      (rendezVous: RendezVous[]) => {
        this.rendezVous = rendezVous; 
      });

    this.rendezVous = this.rendezVousService.rendezVous;
    
    this.rendezVousService.emitRendezVous();
      console.log(this.rendezVous);
  }


  onDeleteRendezVous(rendezVous: RendezVous) {
    this.rendezVousService.removeRendezVous(rendezVous);
  }

  ngOnDestroy() {
    this.rendezVousSubscription.unsubscribe();
  }
 
}

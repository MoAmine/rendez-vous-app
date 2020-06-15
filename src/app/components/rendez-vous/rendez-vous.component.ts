import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { RendezVousService } from 'app/services/rendez-vous/rendez-vous.service';
import { RendezVous } from '../modal/Rendez-vous.modal';
import { Subscription, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {


  rendezVous: any[];
  events: any[];
  options: any;
  rendezVousSubscription: Subscription;

  constructor(private rendezVousService: RendezVousService, private router: Router) { }

  ngOnInit() {
    this.rendezVousSubscription = this.rendezVousService.rendezVousSubject.subscribe(
      (rendezVous: RendezVous[]) => {
        this.rendezVous = rendezVous; 
        this.events = rendezVous;
      });

        this.options = {
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          header: {
              left: 'prev,next today ',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth' 
          },
          editable: true
        };
    
        this.rendezVousService.emitRendezVous();


  }
 

  onDeleteRendezVous(rendezVous: RendezVous) {
    this.rendezVousService.removeRendezVous;
  }


    ngOnDestroy() {
    this.rendezVousSubscription.unsubscribe();
  }
 
}


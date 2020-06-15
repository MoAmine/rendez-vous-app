import { Injectable } from '@angular/core';
import { RendezVous } from 'app/components/modal/Rendez-vous.modal';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

rendezVous: RendezVous[] = [];
rendezVousSubject = new Subject<RendezVous[]>();
uid: string;
collection: string;

  constructor() {
    this.uid = firebase.auth().currentUser.uid;
    this.collection = '/rendez-vous/'+this.uid;
    console.log(this.collection);
    this.getRendezVous();
}

  emitRendezVous() {
    this.rendezVousSubject.next(this.rendezVous);
  }

  saveRendezVous() {
    firebase.database().ref(this.collection).set(this.rendezVous);
  }

getRendezVous() {
 firebase.database().ref(this.collection)
    .on('value', (data) => {
       this.rendezVous = data.val() ? data.val() : [];
       this.emitRendezVous();
      }
    ); 
}


createNewRendezVous(newRendezVous: RendezVous) {
  console.log(this.rendezVous);

  this.rendezVous.push(newRendezVous);
  this.saveRendezVous();
  this.emitRendezVous();
}

removeRendezVous(rendezVous: RendezVous) {
  const rendezVousIndexToRemove = this.rendezVous.findIndex(
    (rendezVousEl) => {
      if(rendezVousEl === rendezVous) {
        return true;
      }
    }
  );
  this.rendezVous.splice(rendezVousIndexToRemove, 1);
  this.saveRendezVous();
  this.emitRendezVous();
  }
}
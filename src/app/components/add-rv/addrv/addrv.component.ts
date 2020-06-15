import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'app/services/rendez-vous/rendez-vous.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezVous } from 'app/components/modal/Rendez-vous.modal';

@Component({
  selector: 'app-addrv',
  templateUrl: './addrv.component.html',
  styleUrls: ['./addrv.component.css']
})
export class AddrvComponent implements OnInit {

  rendezVousForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private rendezVousService: RendezVousService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.rendezVousForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required ],
      date: ['', Validators.required],
      heure: ['',Validators.required ]
    });
  }
  
  onSaveRendezVous() {
    const nom = this.rendezVousForm.get('nom').value; 
    const prenom = this.rendezVousForm.get('prenom').value; 
    const title = this.rendezVousForm.get('title').value; 
    const email = this.rendezVousForm.get('email').value;
    const tel = this.rendezVousForm.get('tel').value; 
    const date = this.rendezVousForm.get('date').value;
    const heure = this.rendezVousForm.get('heure').value; 
    const start = date+"T"+heure;

    const newRendezVous = new RendezVous(nom, prenom, title, email, tel, date, heure, start);
    this.rendezVousService.createNewRendezVous(newRendezVous);
    this.router.navigate(['/rendez-vous']);
  }

}

import { Component } from '@angular/core';
import {Ref} from "../../ref";

@Component({
  selector: 'app-form-marque',
  templateUrl: './form-marque.component.html',
  styleUrls: ['./form-marque.component.css']
})
export class FormMarqueComponent {
  ref: Ref = { code: '', lib: '' };

  ajouterMarque() {
    if (!this.ref.code || !this.ref.lib) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Here you can add additional validation logic if needed

    // Add your logic for adding the marque here.
    // For example, you can push it into an array or store it in a service.

    console.log('Marque à ajouter:', this.ref);
    // After adding the marque, you can reset the form
    this.resetForm();
  }

  resetForm() {
    this.ref = { code: '', lib: '' };
  }

}

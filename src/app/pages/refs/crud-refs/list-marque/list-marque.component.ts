import { Component } from '@angular/core';
import {Ref} from "../../ref";

@Component({
  selector: 'app-list-marque',
  templateUrl: './list-marque.component.html',
  styleUrls: ['./list-marque.component.css']
})
export class ListMarqueComponent {
  marques: Ref[] = [
    { code: '1', lib: 'Marque 1' },
    { code: '2', lib: 'Marque 2' }
    // Add more marque data as needed
  ];
  constructor() {
    console.log(this.marques); // Log the marques array
  }
}

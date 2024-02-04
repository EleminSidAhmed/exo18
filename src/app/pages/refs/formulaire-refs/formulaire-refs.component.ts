import {Component, Input} from '@angular/core';
import {Ref} from "../ref";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulaire-refs',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulaire-refs.component.html',
  //styleUrl: './formulaire-refs.component.css'
})
export class FormulaireRefsComponent {
  @Input() ref: Ref = { code: '', lib: '' };

}

import {Component, Input} from '@angular/core';
import {Ref} from "../ref";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-refs',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-refs.component.html',
  //styleUrl: './list-refs.component.css'
})
export class ListRefsComponent {
  @Input() refs: Ref[] = [];

}

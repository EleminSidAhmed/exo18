import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {StateManagerService} from "../services/state-manager.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit{


  constructor(public location : Location, private stateManagerService: StateManagerService) {
  }

  retour() {
    this.location.back();
  }

  ngOnInit(): void {
    console.log(" cur user: ", this.stateManagerService.curUser)
  }
}

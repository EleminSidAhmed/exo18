import {Component, HostListener} from '@angular/core';
import {StateManagerService} from "./services/state-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionVoiture';


  constructor(private stateManagerService: StateManagerService) {
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    sessionStorage.setItem('curUser', JSON.stringify(this.stateManagerService.curUser));
  }
}

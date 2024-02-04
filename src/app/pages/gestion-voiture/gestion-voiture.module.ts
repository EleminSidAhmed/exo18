import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionVoitureRoutingModule } from './gestion-voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureFrmComponent } from './voiture-frm/voiture-frm.component';


@NgModule({
  declarations: [
    VoitureListComponent,
    VoitureFrmComponent
  ],
  imports: [
    CommonModule,
    GestionVoitureRoutingModule
  ]
})
export class GestionVoitureModule { }

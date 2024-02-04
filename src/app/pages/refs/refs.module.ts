import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefsRoutingModule } from './refs-routing.module';
import {ListRefsComponent} from "./list-refs/list-refs.component";
import {FormulaireRefsComponent} from "./formulaire-refs/formulaire-refs.component";
import { ListMarqueComponent } from './crud-refs/list-marque/list-marque.component';
import { FormMarqueComponent } from './crud-refs/form-marque/form-marque.component';


@NgModule({
  declarations: [
    ListMarqueComponent,
    FormMarqueComponent
  ],
  imports: [
    CommonModule,
    RefsRoutingModule,
    ListRefsComponent,
    FormulaireRefsComponent,

  ]
})
export class RefsModule { }

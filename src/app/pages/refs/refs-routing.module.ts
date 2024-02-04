import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {UserMustBeLoggedInGuard} from "../../services/UserMustBeLoggedInGuard";
import {LoginComponent} from "../login/login.component";
import {ListMarqueComponent} from "./crud-refs/list-marque/list-marque.component";
import {FormMarqueComponent} from "./crud-refs/form-marque/form-marque.component";

const routes: Routes = [
  {
    path: 'listmarque',
    component: ListMarqueComponent,
  },
  {
    path: 'formmarque',
    component: FormMarqueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefsRoutingModule { }

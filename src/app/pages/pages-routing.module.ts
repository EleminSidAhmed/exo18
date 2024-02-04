import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserMustBeLoggedInGuard} from "../services/UserMustBeLoggedInGuard";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserMustBeLoggedInGuard],
    children: [
      {
        path: 'apropos',
        loadChildren: () =>
          import('../pages/apropos/apropos.module').then(
            (m) => m.AproposModule
          ),
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ref',
    loadChildren: () =>
      import('././refs/refs.module').then(
        (m) => m.RefsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}

import { Component } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {IAuth} from "../models/iauth";
import {AuthService} from "../services/auth.service";
import {IUser} from "../models/iuser";
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // msgError = `<h3 style="color: bisque !important;"></h3>`;
  auth:IAuth = {password: "", userName: ""};
  isLoginFailed = false;

  constructor(private util: UtilService,
              private authService: AuthService,
              private stateManagerService: StateManagerService,
  ) {
  }

  logiIn() {
    // @ts-ignore
    this.authService.logIn(this.auth).subscribe((user: IUser) => {
      if(user != null) {
        this.stateManagerService.curUser = user;
        this.util.navigateTo("home");
      } else {
        this.isLoginFailed = true;
      }

    })
  }
}

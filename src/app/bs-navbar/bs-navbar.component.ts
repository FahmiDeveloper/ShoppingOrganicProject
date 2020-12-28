import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUsers$.subscribe(appUser => this.appUser = appUser);
  }

  logOut() {
    this.auth.logOut();
  }

}

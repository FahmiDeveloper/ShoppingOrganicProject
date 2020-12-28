import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) {}

  logOut() {
    this.auth.logOut();
  }

}

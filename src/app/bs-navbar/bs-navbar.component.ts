import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  user$: Observable<firebase.User>;

  constructor(private afAtuh: AngularFireAuth) { 
    this.user$ = afAtuh.authState;
  }

  logOut() {
    this.afAtuh.signOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  user: firebase.User;

  constructor(private afAtuh: AngularFireAuth) { 
    afAtuh.authState.subscribe(user => this.user = user);
  }

  logOut() {
    this.afAtuh.signOut();
  }

}

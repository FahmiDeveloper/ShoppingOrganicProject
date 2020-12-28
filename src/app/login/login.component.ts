import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private afAtuh: AngularFireAuth) { }

  login() {
    this.afAtuh.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

 

}

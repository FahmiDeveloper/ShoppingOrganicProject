import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(private afAtuh: AngularFireAuth) { 
    afAtuh.authState.subscribe(x => console.log(x));
  }

  logOut() {
    this.afAtuh.signOut();
  }

}

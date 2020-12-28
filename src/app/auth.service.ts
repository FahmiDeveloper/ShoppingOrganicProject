import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

import firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAtuh: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAtuh.authState;
   }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);

    this.afAtuh.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAtuh.signOut();
  }



  get appUsers$(): Observable<AppUser> {
    return this.user$
    .pipe(
      switchMap(user => {
        if (user) return this.userService.get(user.uid).valueChanges();

        return of(null);
      } 
     )
    )
  }

}

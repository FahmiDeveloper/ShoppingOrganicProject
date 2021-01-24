import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AuthService } from 'app/shared/services/auth.service';
import { UserService } from 'app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUsers$
      .pipe(
      map(appUser => appUser.isAdmin));
  }
  
}

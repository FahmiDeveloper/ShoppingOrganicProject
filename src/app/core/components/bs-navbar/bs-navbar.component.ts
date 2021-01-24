import { Component, OnInit } from '@angular/core';
import { AppUser } from 'app/shared/models/app-user';
import { ShoppingCart } from 'app/shared/models/shopping-cart';
import { AuthService } from 'app/shared/services/auth.service';
import { ShoppingCartService } from 'app/shared/services/shopping-cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit{

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.auth.appUsers$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart(); 
  }

  logOut() {
    this.auth.logOut();
  }

}

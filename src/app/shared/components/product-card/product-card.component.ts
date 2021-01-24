import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/shared/models/product';
import { ShoppingCart } from 'app/shared/models/shopping-cart';
import { ShoppingCartService } from 'app/shared/services/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product;

  @Input('show-actions') showActions = true;

  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}

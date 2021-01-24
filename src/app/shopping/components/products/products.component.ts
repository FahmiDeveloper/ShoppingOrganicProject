import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/shared/models/product';
import { ShoppingCart } from 'app/shared/models/shopping-cart';
import { ProductService } from 'app/shared/services/product.service';
import { ShoppingCartService } from 'app/shared/services/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
    ) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
    .getAll()
    .pipe(
      switchMap(products => {
       this.products = products;
       return this.route.queryParamMap;
      })
    )
    .subscribe(params => {
       this.category = params.get('category');
       this.applyFilter();
     })
  }

  private applyFilter () {
    this.filteredProducts = (this.category)
    ? this.products.filter(p => p.category === this.category) 
    : this.products;
  }

}

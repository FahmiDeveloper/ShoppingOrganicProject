import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from '../category.service';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService) { 

    productService
     .getAll()
     .pipe(
       switchMap(products => {
        this.products = products;
        return route.queryParamMap;
       })
     )
     .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category)
        ? this.products.filter(p => p.category === this.category)
        : this.products;
      })

    this.categories$ = categoryService.getCategories();

  }
}

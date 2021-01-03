import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$;
  categories$;

  constructor(productService: ProductService, categoryService: CategoryService) { 
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

}

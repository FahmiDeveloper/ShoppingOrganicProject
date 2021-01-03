import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$;

  constructor(productService: ProductService) { 
    this.products$ = productService.getAll();
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [
    { id: 1, name: 'Product 1', price: 100, image: 'url' },
    { id: 2, name: 'Product 2', price: 200, image: 'url' },
    // More products...
  ];

}

get filteredProducts() {
  return this.products.filter(product =>
    product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

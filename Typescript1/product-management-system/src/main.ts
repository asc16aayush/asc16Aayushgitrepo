console.log("welcome to the project management app");

import {ProductManager} from './productManager';
import {Product} from './product';

const productManager = new ProductManager();

const product : Product = {
    id: 1,
    name: 'Samsung Galaxy S21',
    category: 'Mobile',
    price: 80000,
    rating: 4.5,
    reviewsCount: 100,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2021-01-29'
};

productManager.addProduct(product);

let products : Product[] = productManager.listProducts();
console.log(products);

const product2 : Product = {
    id: 2,
    name: 'Samsung Galaxy S20',
    category: 'Mobile',
    price: 70000,
    rating: 4.3,
    reviewsCount: 90,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2020-02-11'
};

console.log("product addes");
productManager.addProduct(product2);
console.clear();

console.log("products list");
products = productManager.listProducts();
console.log(products);

console.log("product removed");
productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);


console.log("product by category");
productManager.filterProductsByCategory("Mobile");
products = productManager.listProducts();
console.log(products);


console.log("product searched");
productManager.searchProduct(1);
products = productManager.listProducts();
console.log(products);









"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        return this.products;
    }
    ;
    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with id ${id} removed successfully`);
    }
    searchProduct(id) {
        console.log(this.products.find(product => product.id === id));
    }
    updateProduct(id, updatedProduct) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
            console.log(`Product with id ${id} updated successfully`);
        }
        else {
            console.log(`Product with id ${id} not found`);
        }
    }
    filterProductsByCategory(category) {
        return this.products.filter(product => product.category === category);
    }
    getProductCount() {
        return this.products.length;
    }
}
exports.ProductManager = ProductManager;

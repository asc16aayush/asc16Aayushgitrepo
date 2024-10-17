import { Product } from "./product";
export class ProductManager {

    private products : Product[] = [];

    
    addProduct(product : Product):void {
        this.products.push(product);
    }
    
    listProducts():Product[] {
        return this.products;
    };

   
    removeProduct(id:number):void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with id ${id} removed successfully`);
    }

    
    searchProduct(id:number):void{
        console.log(this.products.find(product=>product.id===id));

    }

    updateProduct(id: number, updatedProduct: Partial<Product>): void {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
            console.log(`Product with id ${id} updated successfully`);
        } else {
            console.log(`Product with id ${id} not found`);
        }
    }

    filterProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category);
    }

    
    getProductCount(): number {
        return this.products.length;
    }

}
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

    

    filterProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category);
    }

    
    getProductCount(): number {
        return this.products.length;
    }


    updateProduct(id: number, updates: Partial<Product>): void {
        const prodIndex = this.products.findIndex(products => products.id === id);
        this.products[prodIndex] = { ...this.products[prodIndex], ...updates };
      }

}
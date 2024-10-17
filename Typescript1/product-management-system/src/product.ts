export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: string;
    
    color?: string;
    storage?: string;

    releaseDate: string;
}
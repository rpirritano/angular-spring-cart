export class Product {
    id: string; //was number for admin?
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdate: Date;
    //categoryId: number;
    //retrievedImage: string;
    //two above were only for admin, do you still need them?
}
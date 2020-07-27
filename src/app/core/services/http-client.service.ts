import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  // -----  Product Section ----- //

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/adminproducts/get');
  }

  addProduct(newProduct: Product) {
    return this.httpClient.post<Product>('http://localhost:8080/adminproducts/add', newProduct);
  }

  deleteProduct(id) {
    return this.httpClient.delete<Product>('http://localhost:8080/adminproducts/' + id);
  }

  updateProduct(updatedProduct: Product) {
    return this.httpClient.put<Product>('http://localhost:8080/adminproducts/update', updatedProduct);
  }
}

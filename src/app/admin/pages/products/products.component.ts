import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products-admin';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  selectedProduct: Product;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedProductId = params['id'];
        if (selectedProductId) {
          this.selectedProduct = this.products.find(product => product.id === +selectedProductId);
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.products = response;
  }

  viewProduct(id: number) {
    this.router.navigate(['admin','products'], {queryParams : {id, action: 'view'}});
  }

  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  }
}

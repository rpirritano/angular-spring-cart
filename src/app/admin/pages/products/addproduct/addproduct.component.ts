import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

import { ActivatedRoute, Router } from '@angular/router';

import { HttpClientService } from 'src/app/core/_services/http-client.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Input()
  product: Product

  @Output()
  productAddedEvent = new EventEmitter();

  newProduct: Product;
  message: string;
  password: string;

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {
    this.newProduct = Object.assign({}, this.product);
  }

  addProduct() {
    this.httpClientService.addProduct(this.product).subscribe(
      (product) => {
        this.productAddedEvent.emit();
        this.router.navigate(['admin', 'products']);
      }
    );
  }
}
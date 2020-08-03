import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item';
import { CartService } from 'src/app/core/_services/cart.service'
import { CheckoutFormService } from 'src/app/core/_services/checkout-form.service';
import { OrderItem } from 'src/app/core/models/order-item';




@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;
  orderItems: OrderItem[] = [];

  constructor(private checkoutFormService: CheckoutFormService) { }

  ngOnInit(): void {
  
  }

}

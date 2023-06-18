import { Component } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  count: number = 1;
  increaseQuantity() {
    this.count++;
  }

  decreaseQuantity() {
    if (this.count > 1)
      this.count--;
  }

}

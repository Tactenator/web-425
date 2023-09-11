import { Component } from '@angular/core';
import { IWishlistitem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  items: Array<IWishlistitem> = []

  updateItemsHandler(item: IWishlistitem) {
    this.items.push(item)
  }
 
}

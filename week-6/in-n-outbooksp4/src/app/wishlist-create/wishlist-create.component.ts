import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistitem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent {
  
  @Output() addItemEmitter = new EventEmitter<IWishlistitem>(); 

  item: IWishlistitem

  constructor() {
    this.item = {} as IWishlistitem
  }

  addItem(){
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors }) 
  }
}

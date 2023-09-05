/**
 * Name: Trevor McLaurine
 * Date: 9/4/2023
 * Assignment: Exercise 5.3 - Data Tables
 * Description: Book List Component
**/

import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Observable<IBook[]>;
  header: Array<string> = ["isbn", "title", "numOfPages", "authors"]
  book: IBook

  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks()


  }
  showBookDetails(isbn: string) {
      this.book = this.booksService.getBook(isbn)
      console.log(this.book)
  }
}

/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Exercise 6.2 - Input/Output Properties, Part 1
 * Description: Book List component
**/

import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Observable<IBook[]>;
  header: Array<string> = ["isbn", "title", "numOfPages", "authors"]
  book: IBook

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = booksService.getBooks()


  }
  showBookDetails(isbn: string) {
      this.book = this.booksService.getBook(isbn)
      const newDialog = this.dialog.open(BookDetailsDialogComponent,{
        data: {
          book: this.book
        },
        disableClose: true,
        width: '800px'
      })

      console.log(this.book)

      newDialog.afterClosed().subscribe(result => {
        if(result === 'confirm') { this.book === null }
      })
  }
}

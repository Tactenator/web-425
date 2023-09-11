/**
 * Name: Trevor McLaurine
 * Date: 9/6/2023
 * Assignment: Exercise 5.4 - Data Tables
 * Description: Book Details Dialog Component
**/

import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent {

  book: IBook; 
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }
}

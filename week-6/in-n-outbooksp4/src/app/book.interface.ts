/**
 * Name: Trevor McLaurine
 * Date: 9/6/2023
 * Assignment: Exercise 5.4 - Data Tables
 * Description: Book Interface
**/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}

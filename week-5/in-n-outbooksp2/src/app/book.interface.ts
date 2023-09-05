/**
 * Name: Trevor McLaurine
 * Date: 9/4/2023
 * Assignment: Exercise 5.2 - Navigation and Layout
 * Description: Interface for IBook
**/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}

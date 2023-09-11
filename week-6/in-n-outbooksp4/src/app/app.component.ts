/**
 * Name: Trevor McLaurine
 * Date: 9/6/2023
 * Assignment: Exercise 5.4 - Data Tables
 * Description: App Component
**/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = ""

  constructor() {
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";
  }
}

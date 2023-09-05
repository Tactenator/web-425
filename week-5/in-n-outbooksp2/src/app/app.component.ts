/**
 * Name: Trevor McLaurine
 * Date: 9/4/2023
 * Assignment: Exercise 5.2 - Navigation and Layout
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
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }
}

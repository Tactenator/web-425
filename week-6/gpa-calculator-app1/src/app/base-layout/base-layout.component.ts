/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Exercise 6.3 - Layouts
 * Description: Base Layout component
**/

import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {

  assignment: string = "";

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }
}

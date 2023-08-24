/**
 * Name: Trevor McLaurine
 * Date: 8/24/2023
 * Title: app.component.ts
 * Description: Component file
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    //sets the local storage Item for isLoggedIn to false
    localStorage.setItem("isLoggedIn", "false")
  }
}

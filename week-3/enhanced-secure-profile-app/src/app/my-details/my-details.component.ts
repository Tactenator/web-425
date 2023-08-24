/**
 * Name: Trevor McLaurine
 * Date: 8/24/2023
 * Title: my-details.component.ts
 * Description: My details component
 */
import { Component } from '@angular/core';

//Initializes the Person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', "#2023", "CodingWithAngular", "#ngOmaha"
  ]

  // intializes the constructor
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }

  //toString function that lists all data to the console. 
  toString() {
    console.log(`Full Name: ${this.fullName} \n Favorite Food: ${this.favoriteFood} \n Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent {
  myProfile: Person;

  constructor() {
    //constructs new person and places it into the myprofile variable. 
    this.myProfile = new Person("Trevor McLaurine", "Mexican", "Blue");
    this.myProfile.toString();
  }
}

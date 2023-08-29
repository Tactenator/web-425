/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: 3.3 - Passing Data to Routes Part 2
 * Description: Details component. Creates Person class and initializes data
 */
import { Component } from '@angular/core';

//Creates the person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', "#2023", "CodingWithAngular", "#ngOmaha"
  ]

  //creates the constructor.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }

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
  //initializes the new myProfile as a new Person class
  myProfile: Person;

  constructor() {
    //creates a new Person through the person class and intializes it through myProfile
    this.myProfile = new Person("Trevor McLaurine", "Mexican", "Blue");
    this.myProfile.toString();
  }
}

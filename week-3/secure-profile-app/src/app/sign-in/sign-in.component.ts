/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: 3.3 - Passing Data to Routes Part 2
 * Description: Sign In Typescript Component for Logging In
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //Creates logged in variable
  isLoggedIn: boolean = false;

  //Creates a private router that works under specific circumstances
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  //Sign in function; If logged in, will navigate to the home page
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}

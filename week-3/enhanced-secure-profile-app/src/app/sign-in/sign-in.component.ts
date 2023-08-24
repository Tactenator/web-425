/**
 * Name: Trevor McLaurine
 * Date: 8/24/2023
 * Title: sign-in.component.ts
 * Description: Sign In component
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    
  }

  // creates the sign in function
  signIn(username: string, password: string) {
    //checks to see if there is a value for username and password
    if(username && password){
      //changes local variable to true
      localStorage.setItem("isLoggedIn", "true")
      //navigates to home after verifying isLoggedIn is true
      this.router.navigate(['/home'],)
    }
  }
}

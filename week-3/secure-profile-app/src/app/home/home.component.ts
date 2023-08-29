/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: 3.3 - Passing Data to Routes Part 2
 * Description: Home Component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //initializes a new logged in variable.
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    //grabs the parameters to see if person is logged in`
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}

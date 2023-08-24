import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

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

  signIn(username: string, password: string) {
    if(username && password){
      localStorage.setItem("isLoggedIn", "true")
    }

    this.router.navigate(['/home'],)
  }
}

/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: 3.3 - Passing Data to Routes Part 2
 * Description: Routing Component for Sign In and Home
 */

import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]

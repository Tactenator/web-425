/**
 * Name: Trevor McLaurine
 * Date: 8/24/2023
 * Title: app.routing.ts
 * Description: Routing file
 */
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isSignInGuard } from './sign-in.guard';

//constructs the routes
export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent,
        canActivate: [isSignInGuard],
        
    },
    {
      path: 'home',
      component: HomeComponent
    }
]

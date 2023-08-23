import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isSignInGuard } from './sign-in.guard';

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

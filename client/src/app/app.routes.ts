import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: 'about', component: AboutusComponent },
  { path: '**', redirectTo: 'not-found' },
];

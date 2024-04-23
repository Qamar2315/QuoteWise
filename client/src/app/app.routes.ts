import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { authGuard } from './auth.guard';
import { ViewQuoteComponent } from './components/view-quote/view-quote.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: NotfoundComponent },
  {
    path: 'create-quote',
    component: CreateQuoteComponent,
    canActivate: [authGuard],
  },
  { path: 'about', component: AboutusComponent },
  {
    path: 'quotes/:id',
    component: ViewQuoteComponent,
    canActivate: [authGuard],
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'not-found' },
];

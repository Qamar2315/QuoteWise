import { Injectable } from '@angular/core';
import { environment } from '../../../environment.dev';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  private user: User | undefined;
  constructor() {}
  getUser() {
    return this.user;
  }
  isAuthenticated() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
  
}

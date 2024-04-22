import { Injectable } from '@angular/core';
import { environment } from '../../../environment.dev';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  private user: User | null = this.getUserFromLocalStorage();
  constructor() {}
  getUser() {
    return this.user;
  }

  getUserFromLocalStorage() {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('name');
    if(id && token && username){
      return {id, token, username};
    }else{
      return null;
    }
  }

  isAuthenticated() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}

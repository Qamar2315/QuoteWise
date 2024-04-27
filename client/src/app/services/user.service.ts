import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService:AuthService) { }
  isAuthorized(id:string){
    if(this.authService.getUser()?._id==id){
      return true
    }else{
      return false
    }
  }
}

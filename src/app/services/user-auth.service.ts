import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authSubject: BehaviorSubject<boolean> //create behaviour subject to quickly update the login and logout
  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false)
   }

  login () {
    localStorage.setItem('token' , 'asdasdasdasf45w4wwd')
    this.authSubject.next(true)
  }
  logout(){
    localStorage.removeItem('token')
    this.authSubject.next(false)
  }
  getUserLogged () : boolean{
   return localStorage.getItem('token')? true : false
  }


  getAuthSubject() : BehaviorSubject<boolean>
  {
    return this.authSubject
  }
}

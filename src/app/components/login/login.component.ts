import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLoggoed : boolean
constructor( private _userAuth : UserAuthService){

  this.isUserLoggoed = this._userAuth.getUserLogged()
}
login(){
  this._userAuth.login()

  this.isUserLoggoed = this._userAuth.getUserLogged()
}
logout(){
  this._userAuth.logout()

  this.isUserLoggoed = this._userAuth.getUserLogged()


}
}

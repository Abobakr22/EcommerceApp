import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isUserLoggoed !: boolean

  constructor(private _userAuth : UserAuthService){

  }

  ngOnInit(): void {
    // this.isUserLoggoed = this._userAuth.getUserLogged()
    //subscribe on getAuthSubject Observable
    this._userAuth.getAuthSubject().subscribe({
      next: (status) => {
        this.isUserLoggoed = status
      }
    })
  }
}

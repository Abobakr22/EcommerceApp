import { languageAction } from './../../store/Language/language.action';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isUserLoggoed !: boolean
  language$: Observable<string>
  currentLanguage!: string

  constructor(private _userAuth: UserAuthService,
    private store: Store<{ language: string }>
  ) {
    this.language$ = this.store.select('language')
    this.language$.subscribe((newLang) => {
      this.currentLanguage = newLang
    })
  }

  changeLanguage() {
    this.store.dispatch(languageAction({ lang: (this.currentLanguage=="en")? 'ar':'en' }))
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

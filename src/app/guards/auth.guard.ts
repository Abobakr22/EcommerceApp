import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  //injecting services by using inject method => because we are in function not class
  let _userAuthService = inject(UserAuthService)
  let _router = inject(Router)

  if (_userAuthService.getUserLogged()) {
    return true;
  }
  else {
    _router.navigateByUrl('/Login')
    return false;
  }

};

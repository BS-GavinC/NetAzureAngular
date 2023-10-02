import { CanActivateFn } from '@angular/router';
import { GuardsFakeAuthService } from './guards-fake-auth.service';
import { inject } from '@angular/core';

export const mamyGuard: CanActivateFn = (route, state) => {

  let fakeAuthServe = inject(GuardsFakeAuthService)

  if(fakeAuthServe.isConnect)
    return true
  else
    return false
};

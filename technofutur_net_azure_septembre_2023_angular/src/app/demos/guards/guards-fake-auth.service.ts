import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardsFakeAuthService {

  isConnect : boolean = false

  constructor() {
  }

  login()
  {
    return this.isConnect = true
  }

  logout()
  {
    return this.isConnect = false
  }
}

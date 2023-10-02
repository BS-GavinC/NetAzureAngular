import { Component, inject } from '@angular/core';
import { GuardsFakeAuthService } from '../guards-fake-auth.service';

@Component({
  selector: 'app-public-compo',
  templateUrl: './public-compo.component.html',
  styleUrls: ['./public-compo.component.scss']
})
export class PublicCompoComponent {

  isConnect : boolean = false

  constructor(private fakeAuth : GuardsFakeAuthService)
  {
    this.isConnect = this.fakeAuth.isConnect
  }

  login()
  {
    this.isConnect = this.fakeAuth.login()
  }

  logout()
  {
    this.isConnect = this.fakeAuth.logout()
  }

}

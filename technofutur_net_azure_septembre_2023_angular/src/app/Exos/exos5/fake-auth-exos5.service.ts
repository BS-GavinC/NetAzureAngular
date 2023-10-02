import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthExos5Service {


  isConnect : WritableSignal<boolean> = signal(false)

  constructor() {
    let connectState = localStorage.getItem('isConnect')
    if(connectState){
      this.isConnect.set(JSON.parse(connectState))
    }
  }

  login()
  {
    localStorage.setItem('isConnect', 'true')
    this.isConnect.set(true)
  }

  logout()
  {
    localStorage.setItem('isConnect', 'false')
    this.isConnect.set(false)
  }

}

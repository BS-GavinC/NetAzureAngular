import { Component } from '@angular/core';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html',
  styleUrls: ['./exos2.component.scss']
})
export class Exos2Component {

  time : number = 57
  timer : any

  start() {
    this.timer = setInterval(() => this.time++, 1000)
  }

  pause() {
    clearInterval(this.timer)
    this.timer = null
  }

  reset() {
    this.pause()
    this.time = 0
  }

}

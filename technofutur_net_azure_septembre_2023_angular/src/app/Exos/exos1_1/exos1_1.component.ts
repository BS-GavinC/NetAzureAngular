import { Component } from '@angular/core';

@Component({
  selector: 'app-exos1_1',
  templateUrl: './exos1_1.component.html',
  styleUrls: ['./exos1_1.component.scss']
})
export class Exos1_1Component {
  chrono: number = 0
  chrono2: { minutes: number, seconds: number } = { minutes: 0, seconds: 0 }
  chrono3: { minutes: number, seconds: number, milli: number } = { minutes: 0, seconds: 0, milli: 0 }
  intervalChrono: any;
  intervalChrono2: any;
  intervalChrono3: any;

  
  startChrono() {
    this.intervalChrono = setInterval(() => { this.chrono++ }, 1000);
    
  }
  stopChrono() {
    clearInterval(this.intervalChrono);
    
    
  }
  resetChrono() {
    this.chrono = 0;
    
  }


  startChrono2() {
    
    this.intervalChrono2 = setInterval(() => {
      this.chrono2.seconds++;
      if (this.chrono2.seconds === 60) {
        this.chrono2.minutes++;
        this.chrono2.seconds = 0;
      }
    }, 1000);
  }
  stopChrono2() {
    
    clearInterval(this.intervalChrono2);
    
  }
  resetChrono2() {
    
    this.chrono2 = { minutes: 0, seconds: 0 };
  }

  getFormattedTime(): string {
    
    return `${this.chrono2.minutes} Min ${this.chrono2.seconds} Sec`;  }
    
    
    
startChrono3()
{
  this.intervalChrono3 = setInterval(() => {
      this.chrono3.milli++;
    if (this.chrono3.milli === 1000) {
      this.chrono3.seconds++;
      this.chrono3.milli = 0;
    }
    if (this.chrono3.seconds === 60) {
      this.chrono3.minutes++;
      this.chrono3.seconds = 0;
    }
  }, 1); // Mettez 1 milliseconde pour afficher les millisecondes
}
stopChrono3() {
    
  clearInterval(this.intervalChrono3);
  
}
resetChrono3() {
  
  this.chrono3 = { minutes: 0, seconds: 0, milli:  0 };
}

getFormattedTime2(): string {
  
  return `${this.chrono3.minutes} Min ${this.chrono3.seconds} Sec ${this.chrono3.milli} MSec`;  }
  
  
}
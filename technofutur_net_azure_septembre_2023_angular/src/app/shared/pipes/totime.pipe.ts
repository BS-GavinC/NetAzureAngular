import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value : number): string {
    let sec = value % 60;
    let min = Math.floor(value / 60);
    let returnString : string = `${(min < 10 ? '0' : '')}${min} minutes et ${(sec < 10 ? '0' : '')}${sec} secondes`;
    return returnString;
  }
}

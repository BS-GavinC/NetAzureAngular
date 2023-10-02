import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtobtc'
})
export class EurtobtcPipe implements PipeTransform {

  transform(value: number): string {
    return value / 26248 + ' BTC';
  }

}

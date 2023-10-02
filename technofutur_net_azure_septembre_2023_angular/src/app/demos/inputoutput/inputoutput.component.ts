import { Component } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.scss']
})
export class InputoutputComponent {

  myValue : string = ""


  valueFromChildren : string = ""

  recevoirReponse(choix : string) {
    this.valueFromChildren = choix
  }
}

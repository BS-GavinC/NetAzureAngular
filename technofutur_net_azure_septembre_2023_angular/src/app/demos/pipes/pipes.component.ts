import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  myString : string = "BieN lE BonJouR"
  myNumber : number = 3.837
  myDate : Date = new Date()
  myObject : any = {nom : "Arthur", role : "Roi de bretagne", age : 887}

  valeurEnEuro : number = 123456789
}

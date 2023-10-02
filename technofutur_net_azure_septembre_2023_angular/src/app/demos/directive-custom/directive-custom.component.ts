import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-custom',
  templateUrl: './directive-custom.component.html',
  styleUrls: ['./directive-custom.component.scss']
})
export class DirectiveCustomComponent {

  listHorseMan : any[] = [
    { name : "Mort", colorHorse : "Blanc" },
    { name : "Guerre", colorHorse : "Rouge" },
    { name : "Famine", colorHorse : "Noir" },
    { name : "Pestillance", colorHorse : "Vert" },
  ]


  listClient : any[] = [
    { name : "Amaury", inOrdered : 1 },
    { name : "Anthony", inOrdered : 0 },
    { name : "Donovan", inOrdered : -1 },
    { name : "Iliamo", inOrdered : 1 },
    { name : "Jéremy", inOrdered : 0 },
    { name : "Zachary", inOrdered : 1 },
    { name : "Tanya", inOrdered : -1 },
    { name : "Michael", inOrdered : 1 }
  ]

  color : string = "black"
  taille : number = 15
}

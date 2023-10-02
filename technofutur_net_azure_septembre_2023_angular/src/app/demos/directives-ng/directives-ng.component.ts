import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ng',
  templateUrl: './directives-ng.component.html',
  styleUrls: ['./directives-ng.component.scss']
})
export class DirectivesNgComponent {

  listHorseMan : any[] = [
    { name : "Mort", colorHorse : "#eeeeee" },
    { name : "Guerre", colorHorse : "#b71c1c" },
    { name : "Famine", colorHorse : "#212121" },
    { name : "Pestillance", colorHorse : "#1b5e20" },
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


  getColorHorse(name : string)
  {
    let horseManFinded = this.listHorseMan.find(h => h.name == name)
    return horseManFinded.colorHorse
  }

  getInOrdererColor(status : number)
  {
    if(status == 1)
      return "green accent-3"
    else if(status == 0)
      return "orange darken-1"
    else if(status == -1)
      return "red accent-4"
    else
      return "grey darken-2"
  }


  retrogradeClient(name : string)
  {
    this.listClient = this.listClient.map((client) => {
      
      if(client.name == name)
        client.inOrdered--
      
      return client
    })
  }


  upgradeClient(name : string)
  {
    this.listClient = this.listClient.map((client) => {
      
      if(client.name == name)
        client.inOrdered++
      
      return client
    })
  }

}

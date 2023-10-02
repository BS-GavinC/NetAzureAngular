import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  //props one way binding
  str : string = "Bindings"
  num : number = 42
  bool : boolean = true
  date : Date = new Date()

  //props two way binding
  tw_str : string ='Bindings'
  tw_number: number = 42
  //binding event
  count: number = 0
  increment(){
    this.count ++
  }
  decrement(){
    this.count --
  }
  resetcount() {
    this.count = 0
  }
}

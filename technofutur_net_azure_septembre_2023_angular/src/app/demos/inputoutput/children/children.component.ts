import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {

  @Input() valueFromParent : string = ""
  @Input() value2 : string = ""

  maListe : string[] = ["Je sais pas", "comme tu veux", "j'ai pas faim"]

  @Output() reponseEvent : EventEmitter<string> = new EventEmitter<string>()

  envoyerChoix(choix : string) {
    this.reponseEvent.emit(choix)
  }
}

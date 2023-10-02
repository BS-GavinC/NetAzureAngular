import { Component } from '@angular/core';

@Component({
  selector: 'app-exos3',
  templateUrl: './exos3.component.html',
  styleUrls: ['./exos3.component.scss']
})
export class Exos3Component {

  shoppingList : string[] = []

  newArticle : string = ""

  articleList : string[] = ["Coca", "Fanta", "Sprite"]

  listeCassee : string = ""

  urldemonimage : string = "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"

  style : string = "btn btn-sm-3 btn-outline-info"

  ajoutArticle() {
    this.shoppingList.push(this.newArticle)
    this.newArticle = ""
  }

  ajout(index : number) {
    this.shoppingList.push(this.articleList[index])
  }

  desassembler() {
    this.listeCassee = this.shoppingList.join(" - ")
  }

}

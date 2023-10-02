import { Component } from '@angular/core';
import { Article, ArticleV2 } from './Article.model';
import { Sin } from './Sin.model';
import { IListPlayers, IPlayer } from './Player.interface';

@Component({
  selector: 'app-typages',
  templateUrl: './typages.component.html',
  styleUrls: ['./typages.component.scss']
})
export class TypagesComponent {

  listArticles : Article[] = [
    { name : "Pommes", qty : 1, dateAjout : new Date() },
    { name : "Poires", qty : 2, dateAjout : new Date() },
  ]

  listArticlesV2 : ArticleV2[] = []

  listSins : Sin[] = [
    { name : "Orgueil"},
    { name : "Avarice", traduction : "Avaritia" },
    { name : "Luxure", traduction : "Luxuria" },
    { name : "Envie", traduction : "Invidia" },
    { name : "Gourmandise", traduction : "Gula" },
    { name : "Colère", traduction : "Ira" },
    { name : "Paresse", traduction : "Acedia" }
  ]

  listPlayer : IListPlayers = {
    playersList :   [
      { name : "Julie", ranked : 1, win : 15669, loose : 145, avatar : "toto.jpg", money : 1200 },
      { name : "Georges", ranked : 2, win : 15650, loose : 245, avatar : "toto.jpg", money : 10 },
      { name : "Didier", ranked : 3, win : 15640, loose : 4, avatar : "toto.jpg", money : 110 },
      { name : "Hervé", ranked : 4, win : 15620, loose : 1256, avatar : "toto.jpg", money : 120 },
      { name : "Brian", ranked : 5, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 }
    ],
    ban : (player : IPlayer) => { return true},
    asc : () => {},
    desc : () => {}
  }
  
  

  constructor(){
    let newSin : Sin = {
      name : "",
      traduction : ""
    }
    //let testSin = new Sin()


    let articleV2 = new ArticleV2()
    articleV2.name = "Pommes"
    articleV2.qty = 1
    articleV2.dateAjout = new Date()

    this.listArticlesV2.push(articleV2)
  }

}

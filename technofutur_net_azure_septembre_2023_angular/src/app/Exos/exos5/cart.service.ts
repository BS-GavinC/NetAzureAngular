import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  listArticles : any[] = []

  constructor() {
    this.listArticles.push({
      name: "Pommes",
      qty: 3,
      dateAjout : new Date()
    })

    let contentStorage = localStorage.getItem("cart")
    
    if(contentStorage){
      this.listArticles = JSON.parse(contentStorage)
    }
  }

  addArticle(newItem : any)
  {
    let tmp = this.listArticles.find(item => item.name == newItem.name) //me renvoie en vrai la référence de l'item dans la liste
    if(tmp != undefined)
    {
      //article already exists
      tmp.qty = ((tmp.qty + newItem.qty) > 5) ? 5 : (tmp.qty + newItem.qty)
    }
    else{
      this.listArticles.push(newItem)
    }

    this.cartLocalStorage()

    return this.listArticles
  }


  deleteArticle(name : string){
    let tmpIndex = this.listArticles.findIndex(item => item.name == name)
    this.listArticles.splice(tmpIndex, 1)

    this.cartLocalStorage()

    return this.listArticles
  }


  cartLocalStorage()
  {
    if(this.listArticles.length > 0)
      localStorage.setItem('cart', JSON.stringify(this.listArticles))
    else
      localStorage.removeItem('cart')
  }
}

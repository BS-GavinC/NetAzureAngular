import { Component } from '@angular/core';

@Component({
  selector: 'app-exos1_2',
  templateUrl: './exos1_2.component.html',
  styleUrls: ['./exos1_2.component.scss']
})
export class Exos1_2Component {
  resultatDesassemble: string = '';

  panierCourses: string[] = [];
  nouvelArticle: string = '';
  articles = [
    {
      id: 1, name: "DeathNote", isSelected: false
    },
    {
      id: 2, name: "FruitDuDémon", isSelected: false
    },
    {
      id: 3, name: "Une journée en enfert", isSelected: false
    }
  ];

  articlesSelectionnes: string[] = [];

  ajouterArticle() {
    if (this.nouvelArticle.trim() !== '') {
      this.panierCourses.push(this.nouvelArticle);
      this.nouvelArticle = '';

    }
  }
  ajouterArticlesSelectionnes() {
    for (const article of this.articles) {
      if (article.isSelected) {
        this.panierCourses.push(article.name);
      }
    }
  }
  desassemblerEtJoindreTableau() {
    const tableauDesassemble = this.panierCourses.join('- '); // Utilisez le séparateur de votre choix
    this.resultatDesassemble = tableauDesassemble;
    console.log(tableauDesassemble);
  }
}

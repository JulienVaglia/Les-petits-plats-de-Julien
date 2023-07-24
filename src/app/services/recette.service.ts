import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() { }

  recipes = Array();

  createRecipe(recipe: JSON): any {

    //Pour effacer le sessionStorage
    // return sessionStorage.removeItem('recipes')


    if (!sessionStorage.getItem('recipes')) {

      let finalRecipe = { id: 1, ...recipe };

      this.recipes.push(finalRecipe);

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

    } else {

      this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

      //On récupère le dernier objet de notre tableau grâce à slice(-1) qui recré un tableau avec le nombre d'entrées demandées ( ici 1 )puis on accède à son indice donc ici 0 puis à sa prorpiété id. On incrémente de 1 pour créer le prochain id
      let id = this.recipes.slice(-1)[0]['id'] + 1;

      this.recipes.push({ id: id, ...recipe });

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

      // console.log(sessionStorage.getItem('recipes'));

    }


  }

  readRecipes() {
    return JSON.parse(sessionStorage.getItem('recipes')!)
  }

  updateRecipe(recette: JSON, id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!)

    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i]['id'] == id) {


        this.recipes[i] = { id: id, ...recette }

        sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
      }
    }


  }

  readOneRecipe(id: any) {

    // return sessionStorage.removeItem('recipes')
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!)

    for (let i = 0; i < this.recipes.length; i++) {

      if (this.recipes[i]['id'] == id) {

        return this.recipes[i];
      }
    }
  }

  deleteRecipe(id: any) {

    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!)

    if (this.recipes.length != 1) {


      for (let i = 0; i < this.recipes.length; i++) {

        if (this.recipes[i]['id'] == id) {
          this.recipes.splice(i, 1)
          sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
        }
      }
    } else {

      sessionStorage.removeItem('recipes')
      this.recipes = []

    }
  }



}

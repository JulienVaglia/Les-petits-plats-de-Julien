import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent {

  constructor(private rs: RecetteService) {

  }
  
    recipes: any

    delete(id:any){

      this.rs.deleteRecipe(id);
      this.ngOnInit()

    }

    ngOnInit() :void {

      this.recipes=this.rs.readRecipes();
    }
}

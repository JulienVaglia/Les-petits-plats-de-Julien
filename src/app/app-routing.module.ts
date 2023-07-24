import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategorieFormComponent} from './categorie-form/categorie-form.component';
import { CategorieComponent } from './categorie/categorie.component';




const routes: Routes = [

  { path : "",component: HomeComponent },
  { path : "formRecipe",component: RecipeFormComponent },
  { path : "formRecipe/:id",component: RecipeFormComponent },
  { path : "listRecipe",component: ListRecipeComponent },
  { path : "formCategorie",component: CategorieFormComponent },
  { path : "formCategorie/:id",component: CategorieFormComponent },
  { path : "categorie",component: CategorieComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }

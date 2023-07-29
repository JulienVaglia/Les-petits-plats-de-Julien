import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ButtonDetailComponent } from './button-detail/button-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';

import { CategorieComponent } from './categorie/categorie.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';

import { HttpClientModule } from '@angular/common/http';

import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { EtapeFormComponent } from './etape/etape-form/etape-form.component';
import { EtapeComponent } from './etape/etape/etape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ButtonDetailComponent,
    RecipeFormComponent,
    ListRecipeComponent,
    CategorieComponent,
    CategorieFormComponent,
    IngredientComponent,
    IngredientFormComponent,
    EtapeFormComponent,
    EtapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





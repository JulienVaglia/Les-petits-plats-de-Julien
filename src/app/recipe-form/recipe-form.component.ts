import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private rs: RecetteService, private cs: CategorieService, private router: Router, private route: ActivatedRoute) {

  }
  categories: any;

  //Récupération des paramètres pour faire la modification
  id: string | null = '0'
  recette = {
    titre: '',
    descriptif: '',
    categorie: '',
    ingredients: [],
    difficulte: '',
    tempsPrep: '',
    tempsCuisson: '',
    cout: '',
    photo: '',
    etapes: []
  }

  formulaire(form: NgForm, id: any) {
    // return console.log(id);

    if (id == null) {

      let test = this.rs.createRecipe(form.value);

    } else {

      this.rs.updateRecipe(form.value, id);

    }


    this.router.navigate(['listRecipe'])
    // console.log(test);


  }

  ngOnInit() {

    this.categories = this.cs.readCategorie()
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {

      this.recette = this.rs.readOneRecipe(this.id)
      
    }

  }

}

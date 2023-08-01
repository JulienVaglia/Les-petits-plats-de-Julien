import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

  }
  categories: any;

  //Récupération des paramètres pour faire la modification
  id: any
  recette = {
    id: 0,
    titre: '',
    description: '',
    id_categorie: '',
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',
  }

ingredients: Array<any>=[];


  // Formulaire Emitter sur page form-recette
  addIngr(event:any){

    console.log(this.ingredients);
    this.ingredients.push({

      quantite: event.quantite,
      nom: event.nom,
      unite: event.unite

    })

  }


  formulaire(form: NgForm) {
    console.log(form.value);
    

    this.http.postData("recette", form.value).subscribe((data)=>{

      console.log("ok");
      
    })

    this.router.navigate(['listRecipe'])

  }


  ngOnInit() {

    this.http.getData("categorie").subscribe({

      next: (data: string) => this.categories = (data),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Success')

    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {

      this.http.getData("recette", this.id).subscribe({

        next: (data) => this.recette = (data),
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Success')
  
      });

    }

  }

}

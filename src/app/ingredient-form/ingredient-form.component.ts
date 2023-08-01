import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

  }
  id_recette: any
  id: any = 0;

  recette: any;
  ingredients: any;
  ingredient: any = {
    id: 0,
    titre: '',
    quantite: '',
    unite: '',
    id_recette: '',
  }
  

  formulaire(form: NgForm) {

    this.http.postData("ingredient", form.value).subscribe({

      next: (data) => {this.ingredient.quantite=''; this.ingredient.titre=""; this.ingredient.unite=""},
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => this.refreshIngredientPage(),

    });
    
  }

  ngOnInit(): void {

    this.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id != null) {

      this.refreshIngredientPage()

    }

  }


  refreshIngredientPage() {


    this.http.readIngredientsByRecipe("ingredient", this.id_recette).subscribe({

      next: data => this.ingredients = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

  }


  delete(id: any) {

    this.http.deleteData("ingredient", id).subscribe({

      next: (data) => this.getData(),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Suppression ok')

    });

  }

  getData() {

    this.http.getData("ingredient").subscribe({

      next: (data) => this.ingredient = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });
  }



}

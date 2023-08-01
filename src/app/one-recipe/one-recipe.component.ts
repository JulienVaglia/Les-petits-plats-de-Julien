import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent {


  id: any;
  recette: any;


  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.getData('recette',this.id).subscribe({

      next: (data)  => this.recette = data,
      error: (Err) => console.log(Err),
      complete: () => console.log("Bravo"),
      
    })
  }

nbPersonne : any = 1



ingredients: any =[

{
  id:1,
  nom:'oeufs',
  quantite:2,
  unite:''
},
{
  id:2,
  nom:'Farine',
  quantite:2,
  unite:'gr'
},
{
  id:3,
  nom:'Chocolat',
  quantite:200,
  unite:'gr'
},
{
  id:4,
  nom:'Lait',
  quantite:2,
  unite:''
},
{
  id:1,
  nom:'Beurre',
  quantite:200,
  unite:'gr'
}

]



}



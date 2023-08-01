import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  objet = {
    nom: '',
    quantite: '',
    unite: ''

  }

@Output() ingrEvent = new EventEmitter<any>();

  addIngredient(nom: string, quantite: string, unite: string) {
   
    this.objet.nom = nom;
    this.objet.unite = unite;
    this.objet.quantite = quantite;

  this.ingrEvent.emit(this.objet)

  }

}

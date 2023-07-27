import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {

  constructor(private http: HttpService) {

  }

  ingredients: any

  delete(id: any) {

    this.http.deleteData("ingredient", id).subscribe({

      
      
      next: (data) => this.getData(),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData(){

    this.http.getData("recette").subscribe({
    
          next: (data: string) => this.ingredients = (data),
          error: (err: Error) => console.error('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification')
    
        });
      }

  ngOnInit() :void {

    this.getData();
  }

}

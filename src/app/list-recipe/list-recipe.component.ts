import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent {

  constructor(private http: HttpService) {

  }
  
    recipes: any

    delete(id: any) {

      this.http.deleteData("recette", id).subscribe({
  
        
        
        next: (data) => this.getData(),
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => this.getData()
  
      });
  
    }

    getData(){

      this.http.getData("recette").subscribe({
      
            next: (data: string) => this.recipes = (data),
            error: (err: Error) => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification')
      
          });
        }

    ngOnInit() :void {

      this.getData();
    }
}

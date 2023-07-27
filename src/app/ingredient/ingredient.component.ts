import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  ingredients: any

  constructor(private http: HttpService) { }


  delete(id: string) {

    this.http.deleteData("ingredient", id).subscribe({

      next: (data: string) => this.getData,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData() {

    this.http.getData("categorie").subscribe({

      next: (data: string) => this.ingredients = (data),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }

  ngOnInit(): void {

    this.getData()

  }

}

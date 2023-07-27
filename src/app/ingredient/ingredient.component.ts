import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  constructor(private http: HttpService) { }

  ingredients: any

  delete(id: any) {

    this.http.deleteData("ingredient", id).subscribe({

      next: (data) => this.getData,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData() {

    this.http.getData("ingredient").subscribe({

      next: (data) => this.ingredients = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }

  ngOnInit(): void {

    this.getData()
  }
}

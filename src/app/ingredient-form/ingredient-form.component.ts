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

  id: any = 0;

  ingredient: any = {
    id: 0,
    titre: '',
    quantite: '',
    unite: '',
    id_recette: '',
  }

  formulaire(form: NgForm) {
console.log(form.value);

    this.http.postData("ingredient", form.value).subscribe({

      next: (data) => console.log(data),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

    this.router.navigate(['ingredient'])

  }



  delete(id: any) {

    this.http.deleteData("ingredient", id).subscribe({

      next: (data) => this.getData(),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData() {

    this.http.getData("ingredient").subscribe({

      next: (data) => this.ingredient = data,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ingredient.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id != null) {
      this.getData();

    }


  }

}

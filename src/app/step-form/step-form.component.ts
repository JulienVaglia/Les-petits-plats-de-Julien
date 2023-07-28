import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

  }
  id_recette: any
  id: any = 0;

  recette: any;
  steps: any;
  step: any = {
    id: 0,
    description: '',
    ordre: '',
    id_recette: '',
  }

  formulaire(form: NgForm) {

    this.http.postData("step", form.value).subscribe({

      next: (data) => console.log(data),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => this.refreshStepPage()

    });

  }

  ngOnInit(): void {

    this.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id != null) {

      this.refreshStepPage()

    }

  }


  refreshStepPage() {


    this.http.readstepsByRecipe("step", this.id_recette).subscribe({

      next: data => this.steps = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

  }


  delete(id: any) {

    this.http.deleteData("step", id).subscribe({

      next: (data) => this.getData(),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => this.refreshStepPage()

    });

  }

  getData() {

    this.http.getData("step").subscribe({

      next: (data) => this.step = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });
  }



}


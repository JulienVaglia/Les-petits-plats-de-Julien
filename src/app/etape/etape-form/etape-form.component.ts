import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/API/http.service';

@Component({
  selector: 'app-etape-form',
  templateUrl: './etape-form.component.html',
  styleUrls: ['./etape-form.component.css']
})
export class EtapeFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

  }
  id_recette: any
  id: any = 0;

  recette: any;
  etapes: any;
  etape: any = {
    id: 0,
    description: '',
    ordre: '',
    id_recette: '',
  }

  formulaire(form: NgForm) {

    this.http.postData("etape", form.value).subscribe({

      next: (data) => console.log(data),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => this.refreshEtapePage()

    });

  }

  ngOnInit(): void {

    this.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id != null) {

      this.refreshEtapePage()

    }

  }


  refreshEtapePage() {


    this.http.readEtapesByRecipe("etape", this.id_recette).subscribe({

      next: data => this.etapes = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

  }


  delete(id: any) {

    this.http.deleteData("etape", id).subscribe({

      next: (data) => this.getData(),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => this.refreshEtapePage()

    });

  }

  getData() {

    this.http.getData("etape").subscribe({

      next: (data) => this.etape = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });
  }



}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AsyncService } from '../services/API/async.service';
import { HttpService } from '../services/API/http.service';


@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {

  categories: any
  wait: any
  reponse: any

  id: string | null = '0';
  categorie = {
    titre: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private async: AsyncService, private http: HttpService) {

  }

  formulaire(form: NgForm, id: any) {


      this.http.postData("categorie", form.value).subscribe({

        next: (data) => console.log(data),
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')

      });

      this.router.navigate(['categorie'])

  }


  getData() {

    this.http.getData("categorie").subscribe({

      next: (data: string) => this.categories = (data),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }


  ngOnInit(): void {

    this.getData()

  }

  // ngOnInit() {

  //   this.id = this.route.snapshot.paramMap.get('id');

  //   if (this.id != null) {

  //   }

  // }


}






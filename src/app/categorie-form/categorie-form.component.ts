import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AsyncService } from '../services/API/async.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {

  wait: any
  reponse: any

  id: string | null = '0';
  categorie = {
    titre: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private async: AsyncService, private http: HttpClient) {

  }

  formulaire(form: NgForm, id: any) {
console.log(this.id);

    if ( this.id == null || this.id =='0' ) {

      this.wait = this.http.post('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/categorie.php?action=create', JSON.stringify(form.value)).toPromise().then((response: any) => { console.log(response); });

    } else {

      this.http.put('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/categorie.php?action=modify&id=' + id, JSON.stringify(id)).toPromise().then((response: any) => { this.ngOnInit() })

    }

    this.reponse = this.async.waitForResponse(this.wait);
    console.log(this.reponse);

    this.router.navigate(['categorie'])
    // console.log(test);

  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {

    }

  }
}

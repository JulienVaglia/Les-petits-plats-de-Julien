import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {

id: string | null ='0';
categorie = {
  titre: ''
}

constructor( private cs: CategorieService, private router: Router, private route: ActivatedRoute) {

}

formulaire(form: NgForm , id: any){

  if (id == null) {

    let test = this.cs.createCategorie(form.value);

  } else {

    this.cs.updateCategorie(form.value, id);

  }


  this.router.navigate(['categorie'])
  // console.log(test);

}

ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('id');

  if (this.id != null) {

    this.categorie = this.cs.readOneCategorie(this.id)

  }

}
}

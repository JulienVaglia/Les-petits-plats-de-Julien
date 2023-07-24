import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  constructor(private cs: CategorieService) {

  }
  
    categories: any

    delete(id:any){

      this.cs.deleteCategorie(id);
      this.ngOnInit()

    }

    ngOnInit() :void {

      this.categories=this.cs.readCategorie();
    }

}

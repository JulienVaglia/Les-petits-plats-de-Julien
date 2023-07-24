import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  categories = Array();

  createCategorie(categorie: JSON) {


    if (!sessionStorage.getItem('categories')) {

      let finalCategorie = { id: 1, ...categorie };

      this.categories.push(finalCategorie);

      sessionStorage.setItem('categories', JSON.stringify(this.categories))

    } else {


      this.categories = JSON.parse(sessionStorage.getItem('categories')!);

      let id = this.categories.slice(-1)[0]['id'] + 1;
      this.categories.push({ id: id, ...categorie });

      sessionStorage.setItem('categories', JSON.stringify(this.categories))

    }
  }



  readCategorie() {
    return JSON.parse(sessionStorage.getItem('categories')!)
  }

  updateCategorie(categorie: JSON, id: any) {

    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i]['id'] == id) {


        this.categories[i] = { id: id, ...categorie }

        sessionStorage.setItem('categories', JSON.stringify(this.categories))
      }
    }
  }

  readOneCategorie(id: any) {

    // return sessionStorage.removeItem('categories')
    this.categories = JSON.parse(sessionStorage.getItem('categories')!)

    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i]['id'] == id) {

        return this.categories[i];
      }
    }
  }

  deleteCategorie(id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    if (this.categories.length != 1) {


      for (let i = 0; i < this.categories.length; i++) {


        if (this.categories[i]['id'] == id) {
          this.categories.splice(i, 1)
          sessionStorage.setItem('categories', JSON.stringify(this.categories))
        }
      }
    } else {

      sessionStorage.removeItem('categories')
      this.categories = []

    }
  }
}

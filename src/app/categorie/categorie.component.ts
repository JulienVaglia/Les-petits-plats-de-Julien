import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  categories: any
  constructor(private http: HttpClient) {

    // console.log(this.categories);    
  }

  delete(id: any) {

    this.http.post('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/categorie.php?action=delete&id=' + id, JSON.stringify(id)).toPromise().then((response: any) => { this.ngOnInit() })
  }

  ngOnInit(): void {

    this.http.get('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/categorie.php?action=readAll').toPromise().then((response: any) => { this.categories = response; })
  }

}

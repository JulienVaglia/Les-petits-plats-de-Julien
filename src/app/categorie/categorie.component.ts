import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  categories: any
  constructor(private http: HttpService) {
 
  }

  delete(id: any) {

    this.http.deleteData("categorie", id).subscribe({

      next: (data: string) => this.getData,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }


  getData(){

this.http.getData("categorie").subscribe({

      next: (data: string) => this.categories = (data),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }


  ngOnInit(): void {

    this.getData()
    
  }

}

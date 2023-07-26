import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  //Lecture
  getData(table: string, id: any = null): Observable<any> {


    if (id != null) {

      return this.http.get('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/' + table + '.php?action=readOne&id')


    } else {

      return this.http.get('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/' + table + '.php?action=readAll')

    }

  }


  //Suppression
  deleteData(table: string, id: any): Observable<any> {

    return this.http.post('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/' + table + '.php?action=delete&id=' + id, {});

  }


  //Création
  postData(table: string, data: any): Observable<any> {

    return this.http.post('http://localhost/Angular/LespetitsplatsdeJulien/src/app/services/API/' + table + '.php?action=create', JSON.stringify(data));
  }

}


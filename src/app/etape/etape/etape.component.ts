import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/API/http.service';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.css']
})
export class EtapeComponent {

  constructor(private http: HttpService) { }

  etapes: any

  delete(id: any) {

    this.http.deleteData("etape", id).subscribe({

      next: (data) => this.getData,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData() {

    this.http.getData("etape").subscribe({

      
      next: (data) => this.etapes = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }

  ngOnInit(): void {

    this.getData()
  }


}
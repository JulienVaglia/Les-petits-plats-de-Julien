import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {

  constructor(private http: HttpService) { }

  steps: any

  delete(id: any) {

    this.http.deleteData("step", id).subscribe({

      next: (data) => this.getData,
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => this.getData()

    });

  }

  getData() {

    this.http.getData("step").subscribe({

      
      next: (data) => this.steps = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notificationInit')

    });
  }

  ngOnInit(): void {

    this.getData()
  }


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent {

  @Input() descriptif: string | undefined;
  @Input() ingredients: Array<string> | undefined;
  @Input() tempsPrep: string | undefined;
  @Input() tempsCuisson: string | undefined;
  @Input() difficulte: any | undefined;
  @Input() cout: any | undefined;

  
  affiche: boolean = false;
  btn1_: boolean = false;
  btn2_: boolean = false;



  surClick() {
    this.affiche = !this.affiche;
  }

  btn1() {
    this.btn1_ = !this.btn1_;
  }

  btn2() {
    this.btn2_ = !this.btn2_;
  }

}






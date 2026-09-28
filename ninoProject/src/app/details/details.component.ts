import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(public salinke: ActivatedRoute) {
    this.ferisDachera()
  }

  public color: any

  ferisDachera() {
    this.salinke.params.subscribe( (data:  any) => {
      console.log(data.id);
      this.color = data.id
    } )
  }
}

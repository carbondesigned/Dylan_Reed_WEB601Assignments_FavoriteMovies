import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
  @Input() movie: Content | undefined;
  public isCurrentSelectedMovie = false;

  constructor() {}

  onPress() {
    console.log('button pressed');
    console.log(this.movie?.id, this.movie?.title);
  }
}

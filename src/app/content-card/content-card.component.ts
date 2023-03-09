import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
  @Input() movie: Content | undefined;

  constructor() {
    console.log(this.movie);
  }

  onPress() {
    console.log('button pressed');
    console.log(this.movie?.id, this.movie?.title);
  }
}

import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
  @Input() content: Content | undefined;
  /* 
    Using an ngFor directive in your Content-list's html file, display 5 Content-card's by passing in the values from your Content array. 
    Content-card's should be display the Content passed into it as folows: 
      - Each Content-card tag has a 1 pixel border applied to it The title should be in a header tag The image, description, creator, type and tags are visible inside of the box. 
      - Styles and positioning of these elements are your choice, so long as they're in the card. (Hint: remember that your tags is an array) Clicking on the image displays the Content's id and title in the console Add any necessary padding, and margins as you see fit 
      - The first content card displayed should have a black solid border of 2 pixels around it.
  */

  // how can i bind this in here: <app-content-card [content]="content"></app-content-card>
  constructor() {
    console.log(this.content);
  }

  onPress() {
    console.log('button pressed');
    console.log(this.content?.id, this.content?.title);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();
  @Input() movies: Content[] = [];
  @Input() currentContent: Content | undefined;

  constructor() {}

  updatedContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: [],
    director: '',
  };

  setCurrentMovie(id: number) {
    console.log('click');
    const movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      this.currentContent = movie;
    }
  }

  addContent() {
    const clonedContent = Object.assign({}, this.updatedContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    // clonedContent.tags = this.newContent.tags.split(',');
    this.updatedContentAdded.emit(clonedContent);
    this.updatedContent = {
      id: 0,
      title: '',
      description: '',
      imgURL: '',
      type: '',
      tags: [],
      director: '',
    };
  }
}

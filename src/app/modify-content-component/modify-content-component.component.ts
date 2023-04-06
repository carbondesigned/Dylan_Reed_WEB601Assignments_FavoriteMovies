import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { AddContentDialogComponent } from '../add-content-dialogue/add-content-dialogue.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();
  @Input() movies: Content[] = [];
  @Input() currentContent: Content | undefined;

  // Step 2: Create a new method to open the dialog
  constructor(public dialog: MatDialog) {}

  openAddContentDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '500px',
      data: {},
    });

    // Listen for dialog close event
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Add content to simulated server
        this.updatedContentAdded.emit(result);
      }
    });
  }

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

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialogue.component.html',
  styleUrls: ['./add-content-dialogue.component.css'],
})
export class AddContentDialogComponent {
  @ViewChild('titleInput', { static: true }) titleInput!: MatInput;
  @ViewChild('descriptionInput', { static: true }) descriptionInput!: MatInput;
  @ViewChild('imgURLInput', { static: true }) imgURLInput!: MatInput;
  @ViewChild('typeInput', { static: true }) typeInput!: MatInput;
  @ViewChild('directorInput', { static: true }) directorInput!: MatInput;
  contentType: any;
  constructor(public dialogRef: MatDialogRef<AddContentDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: [],
    director: '',
  };

  addContent() {
    const clonedContent = Object.assign({}, this.newContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    // clonedContent.tags = this.newContent.tags.split(',');
    this.contentAdded.emit(clonedContent);
    this.newContent = {
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

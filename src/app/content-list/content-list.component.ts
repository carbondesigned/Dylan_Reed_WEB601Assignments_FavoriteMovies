import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../movie.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialogue/add-content-dialogue.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  movies: Content[] = [];
  featuredMovie: Content = {} as Content;
  public isAvailable = false;
  public searchTerm = '';

  constructor(private movieService: MovieService, private dialog: MatDialog) {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
  openAddContentDialog(): void {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '500px',
    });
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onContentAdded(newContent: Content) {
    this.movieService.addMovie(newContent).subscribe((movie) => {
      this.movies.push(movie);
    });
  }

  updateContent(updatedContent: Content) {
    this.movieService.updateMovie(updatedContent).subscribe((updatedMovie) => {
      const index = this.movies.findIndex(
        (movie) => movie.id === updatedMovie.id
      );
      this.movies[index] = updatedMovie;
    });
  }

  searchContent() {
    console.log(this.searchTerm);
    this.movies.forEach((movie) => {
      if (movie.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}

import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'favorite-movies';

  featuredMovie: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovieById(1).subscribe((movie) => {
      this.featuredMovie = movie;
    });
  }
}

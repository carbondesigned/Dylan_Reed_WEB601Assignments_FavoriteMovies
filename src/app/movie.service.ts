declare const require: any;

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private messagesService: MessagesService) {}

  getMovies(): Observable<any[]> {
    const movies = of(require('./contentDb/movies.json'));
    this.messagesService.add('Content array loaded!');
    return movies;
  }

  getMovieById(id: number): Observable<any> {
    const movies = require('./contentDb/movies.json');
    const movie = movies.find((m: Content) => m.id === id);
    this.messagesService.add(`Content Item at id: ${id}`);
    return of(movie);
  }
}

declare const require: any;

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Content[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Content[]> {
    return this.http.get<Content[]>('api/movies');
  }

  addMovie(movie: Content): Observable<Content> {
    return this.http.post<Content>('api/movies', movie, this.httpOptions);
  }

  updateMovie(movie: Content): Observable<any> {
    return this.http.put(`api/movies/${movie.id}`, movie, this.httpOptions);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<Content>(`api/movies/${id}`);
  }
}

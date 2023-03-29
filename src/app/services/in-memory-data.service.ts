import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import '../contentDb/movies.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Content[] = [
      {
        id: 1,
        title: 'Interstellar',
        description:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: 'Christopher Nolan',
        imgURL:
          'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
        type: 'mind-bending',
        tags: ['sci-fi', 'adventure', 'drama'],
      },
      {
        id: 2,
        title: 'The Dark Knight',
        description:
          'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        director: 'Christopher Nolan',
        imgURL:
          'https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        type: 'epic',
        tags: ['sci-fi', 'adventure', 'drama'],
      },
      {
        id: 3,
        title: 'GoodFellas',
        description:
          'Henry Hill and his friends work their way up thxrough the mob hierarchy.',
        director: 'Martin Scorsese',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
        type: 'classic',
        tags: ['crime', 'drama'],
      },
      {
        id: 4,
        title: 'Transformers',
        description:
          'Autobots must escape sight from a bounty hunter who has taken control of the human sercret agency: SHIELD.',
        director: 'Michael Bay',
        imgURL:
          'http://images5.fanpop.com/image/photos/25700000/Transformers-1-The-Saga-Begins-movies-cars-guns-backgrounds-25784442-1600-1200.jpg',
        type: 'action',
        tags: ['war', 'drama'],
      },
      {
        id: 4,
        title: 'Fury',
        description:
          'A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.',
        director: 'David Ayer',
        imgURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c5dOrzJiW3jA3Erej6zOgJX8y76.jpg',
        type: 'action',
        tags: ['war', 'drama'],
      },
      {
        id: 5,
        title: 'Seven',
        description:
          'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        director: 'David Fincher',
        imgURL:
          'https://4.bp.blogspot.com/-H4Z2NfK-PsY/VJLl14mkKuI/AAAAAAAVrAg/CddizRqcuFM/s1600/seven_cover.jpg',
        type: 'thriller',
        tags: ['crime', 'drama'],
      },
      {
        id: 6,
        title: 'The Departed',
        description:
          'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
        director: 'Martin Scorsese',
        imgURL:
          'https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg',
        type: 'thriller',
        tags: ['crime', 'drama'],
      },
      {
        id: 7,
        title: 'American Psycho',
        description:
          'A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
        director: 'Mary Harron',
        imgURL: '',
        type: 'thriller',
        tags: ['crime', 'drama'],
      },
    ];

    return { movies };
  }
  constructor() {}

  public genId(movies: Content[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 1000;
  }
}

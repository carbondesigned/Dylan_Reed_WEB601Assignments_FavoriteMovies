import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent {
  contentList: Content[] = [
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
    // generate 3 more random movies
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
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg',
      type: 'thriller',
      tags: ['crime', 'drama'],
    },
  ];
}

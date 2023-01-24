import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
 contentList = new ContentList(); 
 name = 'name';

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      director: 'Christopher Nolan',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      type: 'Drama',
      tags: ['prison', 'hope', 'freedom']
    })
    this.contentList.add({
      id: 2,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      director: 'Francis Ford Coppola',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      type: 'Crime',
      tags: ['mafia', 'crime', 'family']
    })
    this.contentList.add({
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      director: 'Christopher Nolan',
      imgURL: 'https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      type: 'Action',
      tags: ['crime', 'superhero', 'batman']
    })
  }
  
  renderContent() {
    let content = '';
    for (let i = 0; i < this.contentList.count(); i++) {
      content += this.contentList.render(i);
    }
    return content;
  }
  // q: how can I use above method in html file?
  // a: use interpolation {{ renderContent() }}
}

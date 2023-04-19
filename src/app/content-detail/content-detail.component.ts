import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css'],
})
export class ContentDetailComponent implements OnInit {
  content: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.movieService.getMovieById(id).subscribe((content) => {
      this.content = content;
      this.messageService.add(
        `Content id: ${content.id}, title: ${content.title}`
      );
    });
  }
}

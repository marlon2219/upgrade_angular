import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() posts: IPost[] = [];
}

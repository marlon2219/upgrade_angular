import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IPost } from '../../interfaces/ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  imports: [],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {
blogService = inject(BlogService);
  post?: IPost;

  constructor(private route: ActivatedRoute) {}

  viewPost(id: number): IPost | undefined {
    return this.post = this.blogService.getPostById(id);
  }
  ngOnInit(): void {
    const  id = this.route.snapshot.paramMap.get('idpost') || '';
    this.viewPost(parseInt(id));
    console.log('entramos en ngOnInitee agstinaaa: '+ this.post?.imagen);
  }

 
}


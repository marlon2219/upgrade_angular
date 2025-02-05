import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IPost } from '../../interfaces/ipost';
import { ICategory } from '../../interfaces/icategory';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostCardComponent } from '../../components/post-card/post-card.component';


@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 blogService = inject(BlogService);
  posts: IPost[] = [];
  categories: ICategory[] = [];
  searchText: string = '';

  constructor() {
    this.posts = this.blogService.getAllPosts();
    this.categories = this.blogService.getAllCategories();
  }

  ngOnInit() {
    this.posts = this.blogService.getAllPosts();
    this.categories = this.blogService.getAllCategories();
  }

  filterByCategory(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value !== "") {
    this.posts = this.blogService.getPostsByCategory(Number(target.value));
    }else{
      this.posts = this.blogService.getAllPosts();
    }
  }

  searchPosts(event: Event) {
    const target = event.target as HTMLInputElement;
    this.posts = this.blogService.getSearchPost(target.value);

  }
}



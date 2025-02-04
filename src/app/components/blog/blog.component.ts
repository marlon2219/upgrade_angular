import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IPost } from '../../interfaces/ipost';
import { ICategory } from '../../interfaces/icategory';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [FormsModule,RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
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
  ngOnChanges() {
    console.log("cambio");
  }

  filterByCategory(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value !== "") {
    this.posts = this.blogService.getPostsByCategory(Number(target.value));
    console.log("resultado: "+  target.value);
    }else{
      this.posts = this.blogService.getAllPosts();
    }
  }

  searchPosts(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log("search: "+target.value);
    this.posts = this.blogService.getSearchPost(target.value);

  }
}


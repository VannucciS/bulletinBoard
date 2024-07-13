// navbar.component.ts
import { Component } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private postService: PostService) {}

  addPost() {
    const newPost = {
      title: 'New Post',
      content: 'This is a new post.',
      author: 'Admin',
      createdAt: new Date()
    };
    this.postService.addPost(newPost).subscribe();
  }

  deletePost() {
    // Assuming we delete the last post for simplicity
    this.postService.deleteLastPost();
  }
}

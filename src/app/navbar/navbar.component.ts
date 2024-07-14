// navbar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();

  searchQuery: string = '';

  searchPosts() {
    this.searchEvent.emit(this.searchQuery);
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
  logout(){}

  constructor(private postService: PostService) {}

  addPost() {
    const newPost = {
      title: 'New Post',
      content: 'This is a new post.',
      author: 'Admin',
      createdAt: new Date(),
      status: 'approved'
    };
    this.postService.addPost(newPost).subscribe();
  }

  deletePost() {
    // Assuming we delete the last post for simplicity
    this.postService.deleteLastPost();
  }
}

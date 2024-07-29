import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-posts-to-approve',
  templateUrl: './posts-to-approve.component.html',
  styleUrls: ['./posts-to-approve.component.css']
})
export class PostsToApproveComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPostsToApprove().subscribe(posts => {
      this.posts = posts;
    });
  }

  approvePost(postId: number): Observable<any> {
    this.posts = this.posts.map(post => {
      if (post.id === postId) {
        return { ...post, status: 'approved' };
      }
      return post;
    });
    return of({ success: true }); // Simulate an API call response
  }

  rejectPost(postId: number): Observable<any> {
    this.posts = this.posts.filter(post => post.id !== postId);
    return of({ success: true }); // Simulate an API call response
  }
}

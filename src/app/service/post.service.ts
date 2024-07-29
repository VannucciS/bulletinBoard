// post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.', author: 'Alice', createdAt: new Date('2024-07-01'), status: 'approved' },
    { id: 2, title: 'Second Post', content: 'This is the second post.', author: 'Bob', createdAt: new Date('2024-07-02'), status: 'approved' },
    { id: 3, title: 'Third Post', content: 'This is the Third post.', author: 'Tom', createdAt: new Date('2024-07-02'), status: 'pending' },
    // Add more mock posts as needed
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addPost(post: Post): Observable<Post> {
    post.id = this.posts.length + 1;
    this.posts.push(post);
    return of(post);
  }

  deleteLastPost() {
    this.posts.pop();
  }

  getPostsToApprove(): Observable<any[]> {
    return of(this.posts.filter(post => post.status === 'pending'));
  }

  approvePost(postId: number): void {
    this.posts = this.posts.map(post => {
      if (post.id === postId) {
        return { ...post, status: 'approved' };
      }
      return post;
    });
  }
}

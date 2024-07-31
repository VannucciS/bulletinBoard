// post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'Caribana Fest Parade', content: "Caribana weekend 2024 is right around the corner for Toronto, bringing with it a weekend of Soca beats and droolworthy eats to celebrate the city's Caribbean community, but perhaps the biggest event of all is the annual Carnival Grand Parade.", author: 'Alice', createdAt: new Date('2024-07-01'), imageUrl: 'https://english.news.cn/20240616/0166e23790004effb774b14d26b158c3/202406160166e23790004effb774b14d26b158c3_20240616f72a54d45f9c4f46b9e3084a68c9b125.jpg', status: 'approved' },
    { id: 2, title: 'Downtown Movies in the Park', content: "David Pecaut Square transforms into an outdoor cinema with the return of the popular Movies in the Park series. Featuring iconic films that celebrate fierce, fabulous female characters, it’s the perfect way to spend a summer night. The best part: it’s free. Just bring your friends and something comfy to sit on.", author: 'Bob', createdAt: new Date('2024-06-02'), imageUrl: 'https://www.nowplayingtoronto.com/wp-content/uploads/sites/www.nowplayingtoronto.com/images/2024/06/event-featured-movies-in-the-park-1719326014-768x512.jpeg', status: 'approved' },
    { id: 3, title: 'Fun in the Sun at Colborne Lodge', content: "Indulge in sweet summer fun at Colborne Lodge! Drop by for a round of croquet, Kubb, skittles, or ring toss. Learn about the history of beautiful High Park and create, play, and craft together. Something for everyone! Beat the heat and chill out this July with an exciting line up of outdoor adventures at Toronto History Museums! Choose your own adventure; stroll through the enchanting Artists’ Garden at Spadina, or dive into the July 1st festivities featuring water play, bubble extravaganzas, and larger-than-life lawn games! ​", author: 'Tom', createdAt: new Date('2024-08-02'),imageUrl:'https://secure.toronto.ca/webapps/CC/fileAPI/edc_eventcal/Writing%20Workshop%20GH%202024_R6L_MY04_p3G5mI-gYM24A.png',  status: 'pending' },
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

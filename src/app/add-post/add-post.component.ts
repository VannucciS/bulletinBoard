// add-post.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private postService: PostService) {}

  onSubmit(form: NgForm) {
    const { title, content, author } = form.value;
    const createdAt = new Date();
    const newPost = { title, content, author, createdAt };

    this.postService.addPost(newPost).subscribe(() => {
      // Optionally, handle success (e.g., clear form, notify user)
      form.resetForm();
    });
  }
}

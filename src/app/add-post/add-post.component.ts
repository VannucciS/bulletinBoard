// add-post.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../service/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  selectedFile: File | null = null;

  constructor(private postService: PostService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(form: NgForm) {
    const { title, content, author } = form.value;
    const createdAt = new Date();
    const newPost: Post = { title, content, author, createdAt, status: 'pending' };

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        newPost.imageUrl = reader.result as string;
        this.savePost(newPost, form);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.savePost(newPost, form);
    }
  }

  private savePost(post: Post, form: NgForm) {
    this.postService.addPost(post).subscribe(() => {
      form.resetForm();
      this.selectedFile = null;
    });
  }
}

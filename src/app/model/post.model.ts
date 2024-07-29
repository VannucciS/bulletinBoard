// post.model.ts
export interface Post {
    id?: number;
    title: string;
    content: string;
    author: string;
    genre?: string;
    createdAt: Date;
    imageUrl?: string; 
    status: string;
  }
  
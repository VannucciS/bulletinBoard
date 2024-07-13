// post.model.ts
export interface Post {
    id?: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    imageUrl?: string; // Add this line
  }
  
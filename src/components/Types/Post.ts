export interface Post {
  id: number;
  user: {
    username: string;
    name: string;
  };
  title: string;
  description: string;
  likes: any[];
  comments: string[];
}

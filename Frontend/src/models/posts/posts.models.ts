export interface PostList {
  id: number;
  title: string;
  image: any;
  slug: string;
  description: string;
  status: string;
  views: number;
  date: string;
  user: number;
  profile: number;
  category: number;
  likes: number[];
}

export interface PostListQuery {
  id: number;
  title: string;
  image: any;
  slug: string;
  description: string;
  status: string;
  views: number;
  date: string;
  user: number;
  profile: number;
  category: number;
  likes: number[];
}[]

interface ILaunches {
  id: string;
  provider: string;
}

export interface INewsArticle {
  id: number;
  summary: string;
  title: string;
  updatedAt: string;
  publishedAt: string;

  featured: boolean;
  newsSite: string;

  imageUrl: string;
  url: string;

  events: [];
  launches: ILaunches[];
}

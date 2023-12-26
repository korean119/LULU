import View from '../core/view';

export interface Store {
  currentPage: number;
  feeds: NewsFeed[];
}

export interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

export interface NewsFeed extends News {
  readonly comments_count: number;
  readonly points: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  level: number;
}

export interface Routerinfo {
  path: string;
  page: View;
}
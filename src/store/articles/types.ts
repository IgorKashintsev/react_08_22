

export interface Articles {
  id: string;
  title: string;
};

export interface ArticlesState {
  articles: Articles[];
  loading: boolean;
  error: string;
};
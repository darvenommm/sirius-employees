import { NEWS_POSTS_URL } from '../constants';

import { NewsPost } from '../types';

export const getNewsPosts = async (): Promise<NewsPost[]> => {
  const response = await fetch(NEWS_POSTS_URL);
  const newsPosts = await response.json();

  return newsPosts;
};

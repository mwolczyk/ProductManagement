import { News } from '../core/models/news.models';

export class NewsTestHelper {
  news: News[] = [];

  getNews(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.news.push({
        id: i,
        title: 'Title-' + i,
        author: 'Author-' + i,
        date: 'Date-' + i,
        image: 'Image-' + i,
        content: 'Content-' + i,
      });
    }
    return this.news;
  }
}

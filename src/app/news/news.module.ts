import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsPageComponent } from './containers/news-page/news-page.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule {
}

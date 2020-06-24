import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { News } from '../../../core/models/news.models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {

  @Input() news: News;

  constructor() {
  }

  ngOnInit(): void {
  }

}

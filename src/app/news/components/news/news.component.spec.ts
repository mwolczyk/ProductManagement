import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { NewsComponent } from './news.component';
import { NewsTestHelper } from '../../news.utils';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let testHelper: NewsTestHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ]
    })
      .overrideComponent(NewsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    testHelper = new NewsTestHelper();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have news', () => {
    component.news = testHelper.getNews(1)[0];
    fixture.detectChanges();
    expect(component.news).toBeTruthy();
  });

  it('should render correct news properties', () => {
    component.news = testHelper.getNews(1)[0];
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelectorAll('div')[0].textContent).toBe('Title-0');
    expect(element.querySelectorAll('div')[1].textContent).toBe('Author-0');
    expect(element.querySelectorAll('div')[2].textContent).toBe('Date-0');
    expect(element.querySelectorAll('div')[3].textContent).toBe('Image-0');
    expect(element.querySelectorAll('div')[4].textContent).toBe('Content-0');
  });
});

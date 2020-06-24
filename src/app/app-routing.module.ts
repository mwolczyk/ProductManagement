import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NEWS_PAGE_PATH } from './core/core.const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: NEWS_PAGE_PATH,
      },
      {
        path: NEWS_PAGE_PATH,
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      {
        path: '**',
        redirectTo: NEWS_PAGE_PATH,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Route[] = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

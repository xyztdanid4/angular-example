import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';

export const FirstRoutes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'first',
    component: FirstComponent
  },
];



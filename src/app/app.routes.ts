import { Routes } from '@angular/router';
import { FirstRouterComponent } from './modules/firstModule/first.router';
import { SecondRouterComponent } from './modules/secondModule/second.router';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const AppRoutes: Routes = [
  {
    path: 'first',
    component: FirstRouterComponent,
    loadChildren: () => import('./modules/firstModule/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second',
    component: SecondRouterComponent,
    loadChildren: () => import('./modules/secondModule/second.module').then(m => m.SecondModule)
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

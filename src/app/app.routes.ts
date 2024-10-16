import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { LayoutComponent } from './Components/Layout/layout/layout.component';
import { UserListComponent } from './Components/Layout/user-list/user-list.component';
import { authGGuard } from './Services/guard/auth.guard';
import { BusinessDetailsComponent } from './Components/Layout/business-details/business-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGGuard],
    children: [
      {
        path: 'user-list',

        component: UserListComponent,
      },
      {
        path: 'b-details',
        component: BusinessDetailsComponent,
      },
    ],
  },
];

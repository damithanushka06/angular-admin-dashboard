import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/pages/dashboard/dashboard.component';
import {UsersComponent} from './features/users/pages/users/users.component';
import {UserListComponent} from './features/users/components/user-list/user-list.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
];

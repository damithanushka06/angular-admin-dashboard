import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/pages/dashboard/dashboard.component';
import {UsersComponent} from './features/users/pages/users/users.component';
import {UserListComponent} from './features/users/components/user-list/user-list.component';
import {UserDetailComponent} from './features/users/components/user-detail/user-detail.component';
import {SettingsComponent} from './features/settings/pages/settings/settings.component';


export const routes: Routes = [
  { path: '',redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'settings', component: SettingsComponent },
];

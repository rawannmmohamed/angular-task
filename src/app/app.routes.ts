import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserCardComponent } from './pages/user-card/user-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersListComponent, title: 'users list' },
  { path: 'user-card', component: UserCardComponent, title: 'user' },
];

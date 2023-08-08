import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { UsersComponent } from './navbarPages/users/users.component';
import { DoListComponent } from './dashboard/pages/do-list/do-list.component';
import { TweetsComponent } from './navbarPages/tweets/tweets.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'sidebar', component: SidebarComponent},
  {path: 'login', component:LoginComponent},
  { 
    path: 'profile', component: ProfileComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'toDoList', component: DoListComponent },
    ],
  },
  {path:'users', component:UsersComponent},
  {path:'tweets', component:TweetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

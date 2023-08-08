import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ToastModule } from 'primeng/toast';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeroComponent } from './home/hero/hero.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { UsersComponent } from './navbarPages/users/users.component';
import { DoListComponent } from './dashboard/pages/do-list/do-list.component';
import { MessagesModule } from 'primeng/messages';
import { TweetsComponent } from './navbarPages/tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    HeroComponent,
    SidebarComponent,
    UsersComponent,
    DoListComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

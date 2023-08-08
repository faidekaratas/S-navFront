import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { User } from 'src/core/models/user.model';
import { UserRequest } from 'src/core/models/request/user-request.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  currentUser: User | null;
  content: string = '';
  isAdmin: boolean = false;


  
  constructor(private router: Router, private readonly apiService:ApiService, private authService: AuthService) {
    this.currentUser = null;

  }

  public userRequest: UserRequest = <UserRequest>{}
  users: User[] = [];

  ngOnInit(): void {
    this.initializeScripts();
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser?.userType === 0) {
        this.isAdmin = true;
      }
     
    });

  }

  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }

  private initializeScripts(): void {
    "use strict";

    const fullHeight = (): void => {
      const elements = document.querySelectorAll('.js-fullheight');
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        element.setAttribute('style', `height: ${windowHeight}px`);
      });

      window.addEventListener('resize', () => {
        elements.forEach((element) => {
          element.setAttribute('style', `height: ${windowHeight}px`);
        });
      });
    };

    fullHeight();

    const sidebarCollapse = document.querySelector('#sidebarCollapse');
    const sidebar = document.querySelector('#sidebar');

    if (sidebarCollapse && sidebar) {
      sidebarCollapse.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  }

  loadContent(route: string) {
    /* this.router.navigateByUrl(`/profile/${route}`); */
    this.content = route;
  }

  async logOut() {
    sessionStorage.clear();
    await this.router.navigate(['../home']);
  }
}

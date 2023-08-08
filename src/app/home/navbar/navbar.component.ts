import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onLoginButtonClick(): void {
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}

import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from 'primeng/api';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UsersComponent implements OnInit{
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  public searchName: string = '';

  filteredUsers: User[] = [];

  makeAdmin: User | null = null;
  userPassword: string | null = null;

  constructor(
    private readonly apiService:ApiService,
    private router: Router,
    private readonly authService: AuthService,
    private messageService: MessageService
  ) { }

  users: User[] = [];
  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      //ppipe için koyuldu
      this.filteredUsers = this.users;
      console.log(this.users)
    });
    //console.log(this.users)

  }

}

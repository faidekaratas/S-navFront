import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from 'primeng/api';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { Tweet } from 'src/core/models/tweet.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DoListComponent implements OnInit{

  public registerRequest: RegisterRequest = <RegisterRequest>{};

  constructor(
    private readonly apiService:ApiService,
    private router: Router,
    private readonly authService: AuthService,
    private messageService: MessageService
  ) { }

  tweet: Tweet[] = [];
  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.apiService.getAllEntities(Tweet).subscribe((response) => {
      this.tweet = response.data;
      console.log(this.tweet)
    });
  }

}

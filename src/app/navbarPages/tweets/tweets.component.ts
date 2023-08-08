import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from 'primeng/api';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { TweetRequest } from 'src/core/models/request/tweet-request.model';
import { Tweet } from 'src/core/models/tweet.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TweetsComponent implements OnInit{
  
  public tweetRequest:TweetRequest=<TweetRequest>{}

  tweetAddDialog: boolean = false;
  tweetEditDialog: boolean = false;
  openModel: boolean = false;

  TweetToEdit: Tweet | null = null;

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

  onCreate(entity: TweetRequest) {
    this.tweetAddDialog = true;
    this.createEntity<TweetRequest>(entity, 'Tweet').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Tweet eklendi', life: 3000 });
      }
      this.tweetAddDialog = false;
    });
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.apiService.createEntity<TEntity>(entity, entityType);
  }


  editTweet(id: number) {
    this.apiService.getEntityById<Tweet>(id, Tweet).then((response) => {
      if (response && response.data) {
        this.tweetEditDialog = true;
        this.TweetToEdit = response.data;
      } else {
        console.error('Tweet bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('Tweet alınırken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  onUpdate(id: number, updatedTweet: Tweet) {
    this.update(id, updatedTweet).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı güncelleme başarılı', life: 3000 });
        //this.hideDialog(); 
      }
    }).catch((error) => {
      console.error('Tweet güncellenirken bir hata oluştu:', error);
    });
  }

  update(id: number, updatedTweet: Tweet) {
    return this.apiService.updateEntity(id, updatedTweet, Tweet);
  }

  deleteTweet(id: number) {
    this.delete(id).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Tweet başarılı bir şekilde silindi', life: 3000 });
        //fthis.openModel = false;
      }
    })
  }

  delete(id: number) {
    return this.apiService.deleteEntity(id, Tweet);
  }

  closeModal() {
    this.openModel = false;
  }

}

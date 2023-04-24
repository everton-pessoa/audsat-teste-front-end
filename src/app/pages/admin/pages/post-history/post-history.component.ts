import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.scss']
})
export class PostHistoryComponent implements OnInit{
  public postsData: Post[] = [];
  public userData!: User;
  
  public subGetUser!: Subscription;
  public subGetPosts!: Subscription;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) return;

    this.subGetUser = this.apiService.getOneUser(parseInt(userId)).
      pipe(take(1))
      .subscribe({
        next: (data) => { 
          this.userData = data 
        },
        error: (err) =>{console.log(err)}
      });

    this.subGetPosts = this.apiService.getPostsByUser(parseInt(userId))
      .pipe(take(1))
      .subscribe({
        next: (data) => { 
          this.postsData = data
         },
         error: (err) =>{console.log(err)}
      });
  }

  ngOnDestroy() {
    if(this.subGetUser){this.subGetUser.unsubscribe()};
    if(this.subGetPosts){this.subGetPosts.unsubscribe()};
  }

}

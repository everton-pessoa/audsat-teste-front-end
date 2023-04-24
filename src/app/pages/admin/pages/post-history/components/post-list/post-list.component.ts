import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { LogsService } from 'src/app/shared/services/logs.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  public posts: Post[] = [];
  public subSetLog!: Subscription;


  public constructor(
    private apiService: ApiService,
    private logService:LogsService
  ) {}

  @Input() set postsData(value: Post[]) {
    this.posts = value;
  }

  deletePost(id: number) {
    this.apiService.delById(id).subscribe({
      next: () =>{
        const log = {
          action:"delete",
          message: `o Post ${id} foi deletado`
        }
        
        this.subSetLog = this.logService.setLog(log);

        this.posts = this.posts.filter(
          (post) => post.id != id
        )
      },
      error: (err) =>{console.log(err)}
    });
  };

  ngOnDestroy() {
    
    if(this.subSetLog){this.subSetLog.unsubscribe()};
  }

}

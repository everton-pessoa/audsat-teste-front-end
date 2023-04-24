import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/shared/interfaces/post.interface';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {
  public postId: number | undefined;
  public comments: Comment[] = [];

  public constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    if (!this.postId) return;

    this.apiService.getCommentsByPosts(this.postId).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (err) =>{console.log(err)}
    });
  }

  @Input() set _postId(id: number) {
    this.postId = id;
  }

}

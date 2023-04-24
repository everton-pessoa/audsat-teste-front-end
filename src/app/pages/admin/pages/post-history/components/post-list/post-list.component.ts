import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  public posts: Post[] = [];
  public filteredPosts: Post[] = [];


  public constructor(
    private apiService: ApiService
  ) {}

  @Input() set postsData(value: Post[]) {
    this.posts = value;
  }

  deletePost(id: number) {
    this.apiService.delById(id).subscribe({
      next: () =>{
        this.posts = this.posts.filter(
          (post) => post.id != id
        )
      },
      error: (err) =>{console.log(err)}
    });
  };

}

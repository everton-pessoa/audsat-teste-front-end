import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { ListCommentsComponent } from './components/post-list/component/list-comments/list-comments.component';



@NgModule({
  declarations: [
    PostListComponent,
    InfoUserComponent,
    ListCommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostHistoryModule { }

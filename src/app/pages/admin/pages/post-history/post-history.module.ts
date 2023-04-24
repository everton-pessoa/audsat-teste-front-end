import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './components/post-list/post-list.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { ListCommentsComponent } from './components/post-list/component/list-comments/list-comments.component';
import { PostHistoryComponent } from './post-history.component';

import { PostHistoryRoutingModule } from './post-history.routing.module';

/* Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PostHistoryComponent,
    PostListComponent,
    InfoUserComponent,
    ListCommentsComponent
  ],
  imports: [
    CommonModule,
    PostHistoryRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ]
})
export class PostHistoryModule { }

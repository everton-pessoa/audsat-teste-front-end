import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostHistoryComponent } from './post-history.component';

const routes: Routes = [
  {
    path: 'post-history/:id',
    component: PostHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostHistoryRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFiltersComponent } from './components/users-filters/users-filters.component';
import { ListSearchComponent } from './components/list-search/list-search.component';
import { PostHistoryComponent } from './pages/post-history/post-history.component';



@NgModule({
  declarations: [
    UsersFiltersComponent,
    ListSearchComponent,
    PostHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

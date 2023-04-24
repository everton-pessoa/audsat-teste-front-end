import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersFiltersComponent } from './components/users-filters/users-filters.component';
import { ListSearchComponent } from './components/list-search/list-search.component';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin.routing.module';

/* Material modules */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


import { PostHistoryModule } from './pages/post-history/post-history.module';

import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AdminComponent,
    UsersFiltersComponent,
    ListSearchComponent
  ],
  imports: [
    CommonModule,
    PostHistoryModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    LoadingModule,
    FlexLayoutModule
    
    
  ]
})
export class AdminModule { }

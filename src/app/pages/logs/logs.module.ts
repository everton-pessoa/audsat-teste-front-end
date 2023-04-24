import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRoutingModule } from './logs.routing.module';
import { LogsComponent } from './logs.component';
import { MatTableModule } from '@angular/material/table';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';



@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LogsRoutingModule,
    MatTableModule,
    LoadingModule
    
  ]
})
export class LogsModule { }

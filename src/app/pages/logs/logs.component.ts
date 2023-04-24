import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Log } from 'src/app/shared/interfaces/log.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent  implements OnInit {
  columns: string[] = ['id', 'updatedAt', 'action', 'message'];
  public subscription!: Subscription;

  dataSource: Log[] = [];

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {

    this.subscription = this.apiService.getLogs()
      .pipe(take(1))
      .subscribe({
        next: (data) => { 
          this.dataSource = data.data;
         },
         error: (err) =>{console.log(err)}
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription, take } from 'rxjs';

import { User } from 'src/app/shared/interfaces/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { LogsService } from 'src/app/shared/services/logs.service';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent {
  columns: string[] = ['name', 'username', 'email', 'phone'];
  
  
  @Input() set users(value: User[]) {
    if (value) {
      this.dataSource = value;
    }
  }

  dataSource: User[] = [];
  public subSetLog!: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private logService: LogsService,
    ) {
      this.dataSource = [];
    }

    public gotoPost = (id: number) => {
    
      let log = {
        action: 'view',
        message: `visualizou historico de postagem do usuário ${id}`

      };

      this.subSetLog = this.logService.setLog(log);

    this.router.navigate(['post-history', id], { relativeTo: this.route });
  };

  ngOnDestroy() {
    if(this.subSetLog){this.subSetLog.unsubscribe()};
  }
}


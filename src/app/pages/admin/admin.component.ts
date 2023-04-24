import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { LogsService } from 'src/app/shared/services/logs.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public users: User[] = [];
  public subGetUsers!: Subscription;
  public subSetLog!: Subscription;

  formFilter:any;

  constructor(
    private apiService: ApiService,
    private logService: LogsService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {

    const filter = this.getFilter(this.formFilter);

    this.subGetUsers = this.apiService.getUsers(filter != '?' ? filter: '')
      .pipe(take(1))
      .subscribe({
        next: (data) => { this.users = data; },
        error: (err) =>{console.log(err)}
      });

      let log = {
        action: filter == '?' ? 'list' : `filter`,
        message: filter == '?' ? 'Listagem de usuários' : `Listagem filtrada por ${filter}`

      };

    this.subSetLog = this.logService.setLog(log);

  }

  private getFilter(formFilter:any){
    let filter = '?';

    if (formFilter != null) {
      if (formFilter.hasOwnProperty('name') && formFilter.name != '') {
        filter = `${filter}name=${formFilter.name}`
      }

      if (formFilter.hasOwnProperty('userName') && formFilter.userName != '') {
        if (filter != '?') { filter = filter + "&" };
        filter = `${filter}username=${formFilter.userName}`
      }

      if (formFilter.hasOwnProperty('email') && formFilter.email !='') {
        if (filter != '?') { filter = filter + "&" };
        filter = `${filter}email=${formFilter.email}`
      }
    }
    return filter;
  }

  public setFormData(e:any){
    this.formFilter = e;
    this.getData();
  }

  ngOnDestroy() {
    if(this.subGetUsers){this.subGetUsers.unsubscribe()};
    if(this.subSetLog){this.subSetLog.unsubscribe()};
  }

}

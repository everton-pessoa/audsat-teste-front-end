import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {

  public user: User | undefined;

  @Input() set userData(value: User) {
    this.user = value;
  }

}

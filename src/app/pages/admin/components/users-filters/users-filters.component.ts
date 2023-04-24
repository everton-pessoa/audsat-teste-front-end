import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-filters',
  templateUrl: './users-filters.component.html',
  styleUrls: ['./users-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersFiltersComponent {

  @Output() formData = new EventEmitter();

  formFilter = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl('')
  });

  async filter() {
    this.formData.emit (this.formFilter.value);
  }

}

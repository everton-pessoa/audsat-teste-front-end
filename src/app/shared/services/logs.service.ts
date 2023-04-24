import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  public subSetLog!: Subscription;

  constructor(private apiService:ApiService) { }

  setLog(log:object){

    return this.apiService.postLog(log).pipe(take(1)).subscribe({});
  }

  ngOnDestroy() {
    this.subSetLog.unsubscribe();
  }
}

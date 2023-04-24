import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public isShowLoadingScreen = false;
  public isLoadingProgress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  show() {
    this.isShowLoadingScreen = true;
  }

  hide() {
    this.isShowLoadingScreen = false;
  }

  getStatus(): boolean {
    return this.isShowLoadingScreen;
  }
}

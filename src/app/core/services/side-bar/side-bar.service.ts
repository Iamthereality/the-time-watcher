import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  public sideBarState: BehaviorSubject<boolean>;

  constructor() {
    this.sideBarState = new BehaviorSubject<boolean>(false);
  }

  public toggleSideBarState(sideBarState: boolean) {
    this.sideBarState.next(sideBarState);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  public sideBarState = new BehaviorSubject<boolean>(false);

  constructor() {}

  public toggleSideBarState(sideBarState: boolean) {
    this.sideBarState.next(sideBarState);
  }
}

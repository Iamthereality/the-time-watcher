import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public drawerState$: BehaviorSubject<boolean>;

  constructor() {
    this.drawerState$ = new BehaviorSubject<boolean>(false);
  }

  public toggleDrawerState(state?: boolean) {
    this.drawerState$.next(state ? state : !this.drawerState$.value);
  }
}

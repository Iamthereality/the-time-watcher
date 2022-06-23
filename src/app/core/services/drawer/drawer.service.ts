import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  public drawerState$: Observable<boolean>;

  private _drawerState$: BehaviorSubject<boolean>;

  constructor() {
    this._drawerState$ = new BehaviorSubject<boolean>(false);
    this.drawerState$ = this._drawerState$.asObservable();
  }

  public toggleDrawerState() {
    this._drawerState$.next(!this._drawerState$.value);
  }
}

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly isUserAuthenticated$: Observable<boolean>;

  private readonly _isUserAuthenticated$: ReplaySubject<boolean>;

  constructor() {
    this._isUserAuthenticated$ = new ReplaySubject<boolean>(1);
    this.isUserAuthenticated$ = this._isUserAuthenticated$.asObservable();
  }
}

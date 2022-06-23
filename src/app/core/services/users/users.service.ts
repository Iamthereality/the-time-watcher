import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, switchMap } from 'rxjs';
import { IUser } from '@core/interfaces/domain/user/user.interface';
import { UserProviderService } from '@core/providers/users/user-provider.service';
import { IResponse } from '@core/interfaces/infrastructure/response/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public readonly users$: Observable<IUser[]>;

  private readonly _users$: ReplaySubject<IUser[]>;

  private readonly _getUsers$: Subject<void>;

  constructor(private readonly userProviderService: UserProviderService) {
    this._users$ = new ReplaySubject<IUser[]>(1);
    this.users$ = this._users$.asObservable();
    this._getUsers$ = new Subject<void>();

    this.subscriptionsEmitter();
  }

  public getUsers(): void {
    this._getUsers$.next();
  }

  private usersSubscription(): void {
    this._getUsers$
      .pipe(switchMap(() => this.userProviderService.getUsers()))
      .subscribe((response: IResponse<IUser[]>) => {
        if (response.success) {
          this._users$.next(response.data);
        }
      });
  }

  private subscriptionsEmitter(): void {
    this.usersSubscription();
  }
}

import { Injectable } from '@angular/core';
import { UserProviderService } from '@core/providers/users/user-provider.service';
import { IUser } from '@core/interfaces/domain/user/user.interface';
import { Observable, ReplaySubject, Subject, switchMap } from 'rxjs';
import { IResponse } from '@core/interfaces/infrastructure/response/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly users$: Observable<IUser[]>;
  public readonly user$: Observable<IUser>;

  private readonly _users$: ReplaySubject<IUser[]>;
  private readonly _user$: ReplaySubject<IUser>;

  private readonly _getUsers$: Subject<void>;
  private readonly _getUser$: Subject<string>;

  constructor(private readonly userProviderService: UserProviderService) {
    this._users$ = new ReplaySubject<IUser[]>(1);
    this._user$ = new ReplaySubject<IUser>(1);

    this.users$ = this._users$.asObservable();
    this.user$ = this._user$.asObservable();

    this._getUsers$ = new Subject<void>();
    this._getUser$ = new Subject<string>();

    this.subscriptionsEmitter();
  }

  public getUsers(): void {
    this._getUsers$.next();
  }

  public getUser(id: string): void {
    this._getUser$.next(id);
  }

  private subscriptionsEmitter(): void {
    this._getUser$
      .pipe(
        switchMap((id: string) => this.userProviderService.getUser(id))
      )
      .subscribe((response: IResponse<IUser>) => {
        if (response.success) {
          this._user$.next(response.data);
        }
      });

    this._getUsers$
      .pipe(switchMap(() => this.userProviderService.getUsers()))
      .subscribe((response: IResponse<IUser[]>) => {
        if (response.success) {
          this._users$.next(response.data);
        }
      });
  }
}

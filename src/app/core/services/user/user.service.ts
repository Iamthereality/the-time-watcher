import { Injectable } from '@angular/core';
import { UserProviderService } from '@core/providers/users/user-provider.service';
import { IUser } from '@core/interfaces/domain/user/user.interface';
import { Observable, ReplaySubject, Subject, switchMap } from 'rxjs';
import { IResponse } from '@core/interfaces/infrastructure/response/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly user$: Observable<IUser>;

  private readonly _user$: ReplaySubject<IUser>;

  private readonly _getUser$: Subject<string>;

  constructor(private readonly userProviderService: UserProviderService) {
    this._user$ = new ReplaySubject<IUser>(1);
    this.user$ = this._user$.asObservable();
    this._getUser$ = new Subject<string>();

    this.subscriptionsEmitter();
  }

  public getUser(id: string): void {
    this._getUser$.next(id);
  }

  private userSubscription(): void {
    this._getUser$
      .pipe(switchMap((id: string) => this.userProviderService.getUser(id)))
      .subscribe((response: IResponse<IUser>) => {
        if (response.success) {
          this._user$.next(response.data);
        }
      });
  }

  private subscriptionsEmitter(): void {
    this.userSubscription();
  }
}

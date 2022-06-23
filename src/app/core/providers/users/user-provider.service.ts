import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { environment } from '@env';
import { IResponse } from '@core/interfaces/infrastructure/response/response.interface';
import { IUser } from '@core/interfaces/domain/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {
  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<IResponse<IUser[]>> {
    return this.http.get<IResponse<IUser[]>>(`${environment.url}/users`);
  }

  public getUser(id: string): Observable<IResponse<IUser>> {
    return this.http.get<IResponse<IUser>>(`${environment.url}/users/${id}`);
  }

  public getMe(): Observable<IUser> {
    return this.http.get<IResponse<IUser>>(`${environment.url}/users/me`).pipe(
      map((response: IResponse<IUser>) => {
        if (response.success) {
          return response.data;
        }
      })
    );
  }
}

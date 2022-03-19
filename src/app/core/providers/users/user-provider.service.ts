import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { IResponse } from "@core/interfaces/infrastructure/response/response.interface";
import { IUser } from "@core/interfaces/domain/user/user.interface";

@Injectable({
  providedIn: 'root',
})
export class UserProviderService {
  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<IResponse<IUser[]>> {
    return this.http.get<IResponse<IUser[]>>(`${environment.url}/users`);
  }

  public getUser(id: string): Observable<IResponse<IUser>> {
    return this.http.get<IResponse<IUser>>(`${environment.url}/users/${id}`);
  }
}

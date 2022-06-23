import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserCredentials } from '@core/interfaces/infrastructure/user-credentials/user-credentials.interface';
import { Observable } from 'rxjs';
import { IAuthData } from '@core/interfaces/infrastructure/auth-data/auth-data.interface';
import { IResponse } from '@core/interfaces/infrastructure/response/response.interface';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {
  constructor(private readonly http: HttpClient) {}

  public auth(credentials: IUserCredentials): Observable<IResponse<IAuthData>> {
    return this.http.post<IResponse<IAuthData>>(`${environment}/auth`, { credentials });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserResponse } from '../../interfaces/api/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getUser(id: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`http://localhost:3000/users/${id}`);
  }
}

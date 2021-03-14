import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../../interfaces/auth-response/auth-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  public signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCuGxQIb2WFVWG37SeCTXrAjJbPLox0Eas',
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }
}

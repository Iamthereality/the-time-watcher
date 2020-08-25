import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from "../../../modules/auth/interfaces/auth-response.interface/auth-response";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

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

  public signIn() {

  }

  public signOut() {

  }
}

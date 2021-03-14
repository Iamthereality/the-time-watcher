import { Injectable } from '@angular/core';
import { ApiService } from "../api/api.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) {}

  public signUp(email: string, password: string) {
    return this.api.signUp(email, password);
  }

  public signIn() {}

  public signOut() {}
}

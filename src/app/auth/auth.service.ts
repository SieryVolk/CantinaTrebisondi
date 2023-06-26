import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPR0ZquDnsScOGzb3QaUWrijsG0McBHpU'
  isLoggedIn = true;
  isAdmin = true;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.isLoggedIn
  }

  isRoleAdmin() {
    return this.isAdmin
  }

  signUp(body: {}) {
    return this.http.post(this.url, body)
  }
}

import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LoginRequest} from '../../model/request/loginRequest';
import {LoginResponse} from '../../model/response/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    email: this.getEmail()
  };

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
  }

  login(loginModel: LoginRequest): Observable<any> {
    return this.httpClient.post<LoginResponse>('http://localhost:8082/v1/auth/login', loginModel)
      .pipe(map(data => {
        this.localStorage.store('username', data.username);
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('email', data.email);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        this.loggedIn.emit(true);
        this.username.emit(data.username);
        return true;
      }));
  }

  logout() {
    this.localStorage.clear('username');
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('email');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  getEmail() {
    return this.localStorage.retrieve('email');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>('http://localhost:8082/v1/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken', response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }
}

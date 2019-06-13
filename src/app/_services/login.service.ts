import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public _isLoggedIn = false;
  public token: string;
  public user_name = '';
  private usersUrl = 'http://5d01c3ce9ce12c0014e0ee52.mockapi.io/api/v1/login-basic';


  constructor() {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

    if ( this.token ) {
      this._isLoggedIn = true;
      this.user_name = currentUser.username;
      console.log(currentUser.username);
    }
  }

  isLogged(message: boolean): boolean {
    return this._isLoggedIn = message;
  }

  login( userName: string, password: string): boolean{
    if (userName === 'admin' && password === '1234567') {
      this.token = 'I am the admin';
      this.user_name = userName;
      localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: this.token }));
      this.isLogged(true);
      return true;
    } 
    else {
      return false;
    }

  }

  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      this.user_name = null;
      localStorage.removeItem('currentUser');
      this.isLogged(false);
  }

}

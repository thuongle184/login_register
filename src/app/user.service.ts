import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { user } from './user';
 


@Injectable()
export class UserService {
  
  constructor(
    private http: HttpClient){}

  private usersUrl = 'http://5d01c3ce9ce12c0014e0ee52.mockapi.io/api/v1/login-basic';

  getUsers(): Observable<user[]> {

    return this.http.get<user[]>(this.usersUrl)
      .pipe(
      tap(books => console.log(`Show list `)),
      catchError(this.handleError('getUsers', []))
      );

     
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

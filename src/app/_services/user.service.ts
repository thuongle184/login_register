import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { user } from '../user';
 


@Injectable()
export class UserService {
  
  constructor(
    private http: HttpClient){}

  private usersUrl = 'http://localhost:3000/users';

  getUsers(): Observable<user[]> {

    return this.http.get<user[]>(this.usersUrl)
      ;

     
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

  addUser(user: user): Observable<user> {
    return this.http.post<user>(this.usersUrl, JSON.stringify({
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      lastname:user.lastname
    }));
  }

  log(): void {
    throw new Error("Method not implemented.");
  }
  /** DELETE: delete the hero from the server */

  deleteUer(user: user | number): Observable<user> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<user>(url).pipe(
      tap(_ => this.log()),
      catchError(this.handleError<user>('deleteuser'))
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../user';
 


@Injectable()
export class UserService {
  
  constructor(
    private http: HttpClient){}

  private usersUrl = 'http://localhost:3000/users';

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl);  
  }

  addUser(userItemAdd: user): any {
    console.log(userItemAdd);
    return this.http.post<user>(this.usersUrl, userItemAdd ).subscribe(console.log, console.log);
  }

  deleteUer(userItemDelete : number): any {
    console.log(userItemDelete);
    
    const urlById = `${this.usersUrl}/${userItemDelete}`;
    console.log(urlById);
    return this.http.delete<user>(urlById).toPromise();
    
  }

  updateUser(userItemUpdate: number, user: user): any {
    console.log(userItemUpdate, user);
     const urlById = `${this.usersUrl}/${userItemUpdate}`;
     console.log(urlById);
     return this.http.put<user>(urlById,user).toPromise();  
     ;
   }

}

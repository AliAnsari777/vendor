import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  User } from '../user' ;
import {  Vendor } from '../vendor' ;
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn : 'root'
})

export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8086/api/vendor';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  // public saveV(user: Vendor) {
  //   return this.http.post<Vendor[]>(this.usersUrl, vendor);
  // }

  // public remove(user: User) {
  //    this.http.delete<User>(this.usersUrl, user);
  // }
}

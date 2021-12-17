import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, User } from '../core/interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiEndpoint}/users`);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiEndpoint}/users/${id}`);
  }

  getPostsByUserId(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.apiEndpoint}/posts?userId=${id}`);
  }
}

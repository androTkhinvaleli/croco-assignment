import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type User = any;

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

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiEndpoint}/users/${id}`);
  }
}

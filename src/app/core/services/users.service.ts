import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { apiURL } from '../constants/const';
import { IPage } from '../models/pages';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private cachedUsersData: IPage | null = null;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IPage> {
    if (this.cachedUsersData) {
      return of(this.cachedUsersData);
    } else {
      return this.httpClient.get<IPage>(apiURL).pipe(
        tap((data) => {
          this.cachedUsersData = data;
        })
      );
    }
  }
}

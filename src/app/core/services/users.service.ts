import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { apiURL } from '../constants/const';
import { IPage } from '../models/pages';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IPage> {
    return this.httpClient.get<IPage>(apiURL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;
  userFullName = 'hovik_antanisyan';

  constructor(private http: HttpClient) {
  }

  getUserAndGroupIds(): Observable<any> {
    return forkJoin([
        this.http.get(`${this.apiUrl}group/${this.userFullName}`),
        this.http.get(`${this.apiUrl}user/${this.userFullName}`),
    ]).pipe(
        map((result: any[]) => ({
          groupId: result[0].groupId,
          userId: result[1].userId,
        }))
    );
  }
}

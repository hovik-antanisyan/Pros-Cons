import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ProsConsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getProsAndCons(userInfo: { groupId: string, userId: string }): Observable<any> {
    return this.http.get(`${this.apiUrl}proscons/group/${userInfo.groupId}/user/${userInfo.userId}`);
  }

  update(
      userInfo: { groupId: string, userId: string },
      prosCons: { pros: string[], cons: string[] }
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}proscons/group/${userInfo.groupId}/user/${userInfo.userId}`, {
      pros: prosCons.pros,
      cons: prosCons.cons
    });
  }
}

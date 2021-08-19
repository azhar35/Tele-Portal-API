import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserplansService {

  constructor(private http: HttpClient) { }

  addUserPlan(uid: number, pid: number) {
    return this.http.post("http://localhost:9001/userplans/userplan", {"user": {"id":uid}, "plan": {"id":pid} });
  }
}

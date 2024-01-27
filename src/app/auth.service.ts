import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appId = `64fc4a747b1786417e354f31`;
  constructor(private http:HttpClient) { }
  register(registerDate: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.appId
    });
    const options = { headers: headers };
    return this.http.post("https://dummyapi.io/data/v1/user/create", registerDate, options);
  }
}

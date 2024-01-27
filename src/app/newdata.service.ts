import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewdataService implements OnInit {
  private appId = `64fc4a747b1786417e354f31`;
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.appId
    });
    const newID = { headers: headers };
    return this.http.get(" https://dummyapi.io/data/v1/user", newID)
    
  }
  deleteUserById(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.appId
    });
    const newID = { headers: headers };
    return this.http.delete(`https://dummyapi.io/data/v1/user/${id}`, newID)

  }
  updateUserDataById(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.appId
    });
    const newID = { headers: headers };
   return this.http.get(`https://dummyapi.io/data/v1/user/${id}`,newID)
  }
  updateUserData(id:number,data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.appId
    });
    const newID = { headers: headers };
    return this.http.put(`https://dummyapi.io/data/v1/user/${id}`,data, newID)
  }
  ngOnInit(): void {
    
  }
}

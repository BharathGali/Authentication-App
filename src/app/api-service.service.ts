import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  login_url = "http://127.0.0.1:5000/login"
  register_url = "http://127.0.0.1:5000/register"
  profile_url = "http://127.0.0.1:5000/profile"
  delete_url = "http://127.0.0.1:5000/delete"
  constructor(private http: HttpClient ) { }

  loginUser(data: any): Observable<any> {
    return this.http.post(this.login_url, data,{ responseType: 'text' })
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(this.register_url, data,{ responseType: 'text' })
  }

  getUserDetails(email: any): Observable<any> {
    return this.http.post(this.profile_url, email);
  }

  deleteUser(email: any): Observable<any> {
    return this.http.post(this.delete_url, email,{ responseType: 'text' });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url: string ='https://reqres.in/api/users?page=2';
constructor(private http: HttpClient) { }

getUser(): Observable<any>{
  return this.http.get<any>(this.url);
}

}

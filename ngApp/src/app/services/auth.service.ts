import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerurl = 'http://localhost:3000/api/register';
  private loginurl =  'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {

    return this.http.post<any>(this.registerurl, user);
  }

  loginUser(user) {

    return this.http.post<any>(this.loginurl, user);
  }

  isLoggedin(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }
  getToken(){
    return localStorage.getItem('token')
  }



}

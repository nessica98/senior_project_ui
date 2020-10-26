import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {  }
  logout(): void{
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }
}

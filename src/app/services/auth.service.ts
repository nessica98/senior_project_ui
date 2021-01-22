import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';

import { Login } from '../interfaces/login';
import { APIWebConfigService } from './apiweb-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiHost:string = this.api.getBaseURL();
  constructor(private api:APIWebConfigService) {  }
  
  async formLogin(form_payload){
    const login_result = await Axios.post(`${this.ApiHost}/authen/login`, form_payload)
    return login_result
  }

  logout(): void{
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }
}

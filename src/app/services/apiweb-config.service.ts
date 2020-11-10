import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIWebConfigService {
  BaseUrl:string;
  constructor() { 
    this.BaseUrl = 'http://localhost:5000'
  }
  getBaseURL():string{
    return this.BaseUrl
  }
}

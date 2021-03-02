import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class APIWebConfigService {
  private BaseUrl:string;
  constructor() { 
    if(environment.production){
      this.BaseUrl = 'http://10.2.29.138:5020/api'
    }else{
      this.BaseUrl = 'http://localhost:5020/api'
    }
  }
  getBaseURL():string{
    return this.BaseUrl
  }
}

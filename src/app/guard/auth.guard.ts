import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private authenticationService:AuthService){  }
  public isLoggedIn(): boolean {
    let status = false;
    let token = localStorage.getItem('token');
    console.log(token)
    const helper = new JwtHelperService()
    if(token){
      const isExpired = helper.isTokenExpired(token)
      if(isExpired) return false
    }
    // jwt.verify(token, 'wekimeki', (err,decoded)=>{
    //  if(err) return false
    // })
    // if(localStorage.getItem('isLoggedIn')=="true") status = true;
    if(localStorage.getItem('isLoggedIn')=="true" && token) status = true
    else status = false
    return status
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log(localStorage.getItem('isLoggedIn'))
      if(this.isLoggedIn()){
        return true;

      }
      this.router.navigate(['/logbook-login'])
      return false;
  }
  
}

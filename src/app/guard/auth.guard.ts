import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router,private authenticationService:AuthService){}
  public isLoggedIn(): boolean {
    let status = false;
    if(localStorage.getItem('isLoggedIn')=="true") status = true
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

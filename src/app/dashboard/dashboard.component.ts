import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';  
  
@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.css']  
})  
export class DashboardComponent implements OnInit {  
  
  id: string;  
  dataArr_recv = [{Fishtype:'crab',unit:'kg',amount:22,update:new Date(2019,6,15)}]
  constructor(private router: Router, private authService: AuthService) { }  
  
  ngOnInit() {  
    this.id = localStorage.getItem('token');  
    //console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/logbook-login']);  
  }  
  
}  
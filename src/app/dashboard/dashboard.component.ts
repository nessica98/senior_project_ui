import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import Axios from 'axios';

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
    var fisherykindInput = document.getElementById("fisherykind") as HTMLInputElement;
    var amountInput = document.getElementById("amount") as HTMLInputElement;
    var unitInput = document.getElementById("unitSelect") as HTMLInputElement;
    var form_el = document.getElementById("login1");
    Axios.get('http://localhost:5000/logbook').then((val)=>{
      
      this.dataArr_recv = val.data
      console.log(this.dataArr_recv)
    })
    form_el.addEventListener('submit', (e)=>{
      e.preventDefault()
      console.log('submit')
      var fisherykind = fisherykindInput.value
      var amount = amountInput.value
      var unit = unitInput.value
      if(fisherykind === ''  || amount === '' ){
        alert('กรุณากรอกค่าให้ครบทั้ง 2 ช่อง')
      }else{
      var post_data = {fisheryKind:fisherykind,amount:amount,unit:unit}
      console.log(post_data)
      Axios.post('http://localhost:5000/logbook/add', post_data).then((val)=>{
        console.log(val)
        if(val.data.affectedRows === 1){
          alert('complete add')
          window.location.reload()
        }
      }).catch((reason)=>{
        alert('error')
        console.log(reason)
      })
      }
    })
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/logbook-login']);  
  }  
  
}  
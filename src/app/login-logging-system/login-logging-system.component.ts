import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import Axios from 'axios';
import { AuthService } from '../services/auth.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login-logging-system',
  templateUrl: './login-logging-system.component.html',
  styleUrls: ['./login-logging-system.component.css']
})
export class LoginLoggingSystemComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    var userInput = document.getElementById("email1") as HTMLInputElement;
    var passwordInput = document.getElementById("password1") as HTMLInputElement;
    var form_el = document.getElementById("login1");

    form_el.addEventListener('submit', (e)=>{
      e.preventDefault()
      console.log(userInput.value)
      console.log(Md5.hashStr(passwordInput.value))
      const pass = Md5.hashStr(passwordInput.value)
      //Call /authen/login API
      var form_payload = {user:userInput.value,pass:pass}
      this.auth.formLogin(form_payload).then((val)=>{
        const result = val.data;
        if(result.auth){
          console.log(result.token)
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('token',result.token)
          this.router.navigate(['dashboard'])
        }else{

        }
      })
      Axios.post('http://localhost:5000/authen/login',{user:userInput.value,pass:pass}).then((data_resp)=>{
        console.log(data_resp)
      }).catch((res)=>{console.log(res)})
      // if(userInput.value=='hwangjs'&&passwordInput.value=='js1998'){
      //   localStorage.setItem('isLoggedIn',"true")
      //   console.log('true')
      //   this.router.navigate(['/dashboard'])
      //   //window.location.replace("/logbook")
      // }else{
      //   alert('Login fault')
      //   //location.reload();
      // }
    })
  }

}

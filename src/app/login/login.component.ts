import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  constructor(private loginService:LoginService,private router:Router){}
  login(){
    this.loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login succesfull");
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('token',data.token)
      },
      (error:any)=>{
        alert("login error");
      }
    )
  }

}

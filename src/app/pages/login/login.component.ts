import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router:Router, private userServices:UserService){}

  login() {
    this.userServices.login(this.username, this.password)
  }

  cancelSignin() {
    this.router.navigate(['']);
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  editValue:boolean = false;

  constructor(private router:Router, private userServices:UserService){}

  login() {
    this.editValue = true
    this.userServices.login(this.username, this.password)
  }

  cancelSignin() {
    this.router.navigate(['']);
  }

}
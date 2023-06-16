import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router, private userService:UserService){}

  directHome() {
    this.router.navigate(['/home']);
}

  directProducts() {
    this.router.navigate(['/products']);

}

  directAbout() {
  this.router.navigate(['/about']);

}

directContact() {
  this.router.navigate(['/contact']);

}

directProfile() {
  this.router.navigate(['/profile'])
}
directWelcome() {

  this.userService.logout();
  this.router.navigate([''])
  return false;
}

}

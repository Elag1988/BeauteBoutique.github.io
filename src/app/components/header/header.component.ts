import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}

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
  this.router.navigate([''])
}

}

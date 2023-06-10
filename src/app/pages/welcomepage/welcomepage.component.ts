import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css'],
})
export class WelcomepageComponent {
  constructor(private router: Router) {}

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
}

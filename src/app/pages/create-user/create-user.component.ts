import { Component } from '@angular/core';
import { last } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  name: string = "";
  lastname: string = "";
  username: string = "";
  email: string = "";
  password: string = "";

  constructor( private userService:UserService) {}

  createUser(): void {
    this.userService.create(this.name, this.lastname, this.username, this.email, this.password);
    console.log("user created");
  }

  

}

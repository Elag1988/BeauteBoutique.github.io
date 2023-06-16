import { Component } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectFile!:File;
  userProfile!:any;
  editValue: boolean = false;

  editProfile() {
    this.editValue = true;
  }

  onFileSelected(event:any){
    this.selectFile = event.target.files[0];
  }


  constructor(private userService:UserService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.getOneUser();   
  }
  getOneUser() {
    this.userService.getUser()
    .subscribe(
      (response:any) => {
         
         console.log("response: ", response);
         this.userProfile = response;
      }, 
      (error)=> {
        console.log("error", error);
      }
    );
  }

  cancelUpdate() {
    this.editValue = false;
  }

  updateProfile(){
    this.userService.updateUser(this.userProfile);
    this.editValue = false;
  }
}

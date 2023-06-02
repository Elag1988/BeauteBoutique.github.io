import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl ="http://localhost:3000/api/users";

  constructor(private http: HttpClient, private router:Router) { }

  login(username: string, password:string): void {
    const loginUrl = `${this.apiUrl}/login`;
    const formData = {
      username: username,
      password: password
    }

    this.http.post(loginUrl,formData,{headers:this.getAuthHeaders()})
    .subscribe((response:any) => {
      localStorage.setItem("token", response.token)
      console.log("Respuesta", response)
      this.router.navigate(['/home']);
    },
    (error) => {
      if(error instanceof HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
          console.log("Error:", error.error.message)
        }
      } else {
        console.log(`Codigo de error ${error.status}` + `Mensaje: ${error.error}`);
      }
    })
  }


  create(name:string,lastname:string, username:string, email:string, password:string) {
    const createUrl = `${this.apiUrl}/create`;
    const formData = {
      name:name,
      lastname:lastname,
      username: username,
      email:email,
      password: password
    }

    this.http.post(createUrl,formData)
    .subscribe((response:any) => {
      console.log("Creacion de Registro exitoso", response);
    },
    (error)=> {
      console.log("error", error);
    })
  }

  private getAuthHeaders():HttpHeaders {
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({"Authorization" : `Bearer ${authToken}`}) ;
    return headers;
  }

}

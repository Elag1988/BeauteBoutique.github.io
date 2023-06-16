import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiProductsUrl ="http://localhost:3000/api/products/";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiProductsUrl);
  }
}

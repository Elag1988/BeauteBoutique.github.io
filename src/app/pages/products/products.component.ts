import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productInfo: any[] = [];

  constructor(private productservice:ProductService) {}


  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos() {
    this.productservice.getProducts()
    .subscribe(
      (response:any) => {
         
         console.log("response: ", response);
         this.productInfo = response;
      }, 
      (error)=> {
        console.log("error", error);
      }
  )}

  imagesFront: any[] = [
    { image: "../../../assets/imagenes/producto_1_F.jpeg" },
    { image: "../../../assets/imagenes/producto_2_F.jpeg" },
    { image: "../../../assets/imagenes/producto_3_F.jpeg" },
    { image: "../../../assets/imagenes/producto_4_F.jpeg" },
    { image: "../../../assets/imagenes/producto_5_F.jpeg" },
    { image: "../../../assets/imagenes/producto_6_F.jpeg" },
    { image: "../../../assets/imagenes/producto_7_F.jpeg" },
    { image: "../../../assets/imagenes/producto_8_F.jpeg" },
    { image: "../../../assets/imagenes/producto_9_F.jpeg" },
    { image: "../../../assets/imagenes/producto_10_F.jpeg" },
    { image: "../../../assets/imagenes/producto_11_F.jpeg" },
    { image: "../../../assets/imagenes/producto_12_F.jpeg" },
    { image: "../../../assets/imagenes/producto_13_F.jpeg" },
    { image: "../../../assets/imagenes/producto_14_F.jpeg" },
    { image: "../../../assets/imagenes/producto_15_F.jpeg" },
    { image: "../../../assets/imagenes/producto_16_F.jpeg" }
    
  ];

  imagesBack: any[] = [
    { image: "../../../assets/imagenes/producto_1_E.jpeg" },
    { image: "../../../assets/imagenes/producto_2_E.jpeg" },
    { image: "../../../assets/imagenes/producto_3_E.jpeg" },
    { image: "../../../assets/imagenes/producto_4_E.jpeg" },
    { image: "../../../assets/imagenes/producto_5_E.jpeg" },
    { image: "../../../assets/imagenes/producto_6_E.jpeg" },
    { image: "../../../assets/imagenes/producto_7_E.jpeg" },
    { image: "../../../assets/imagenes/producto_8_E.jpeg" },
    { image: "../../../assets/imagenes/producto_9_E.jpeg" },
    { image: "../../../assets/imagenes/producto_10_E.jpeg" },
    { image: "../../../assets/imagenes/producto_11_E.jpeg" },
    { image: "../../../assets/imagenes/producto_12_E.jpeg" },
    { image: "../../../assets/imagenes/producto_13_E.jpeg" },
    { image: "../../../assets/imagenes/producto_14_E.jpeg" },
    { image: "../../../assets/imagenes/producto_15_E.jpeg" },
    { image: "../../../assets/imagenes/producto_16_E.jpeg" }
    
  ];
}

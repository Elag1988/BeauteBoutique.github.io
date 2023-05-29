import { Component, OnInit  } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit() {
    this.initMap();
  }
  private initMap() {
    const map = L.map('map', {
      center: [4.60971, -74.08175],
      zoom: 13,
      scrollWheelZoom: false
    });
  
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(map);
  
    L.marker([4.60971, -74.08175]).addTo(map)
      .bindPopup('¡Hola! ¡Estamos aquí!')
      .openPopup();
  }
}


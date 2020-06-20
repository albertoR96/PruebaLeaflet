import { Component, OnInit } from '@angular/core';
import * as L from '../../../node_modules/leaflet'
declare global {
  interface Window { initMap: any; }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products = [
    //'trapeador', 'escoba', 'cubeta'
    { name: 'Trapeador', cost: 30, imgsrc: "assets/products/trapeador01.jpg" },
    { name: 'Escoba', cost: 25, imgsrc: "assets/products/escoba.jpg" },
    { name: 'Guantes', cost: 18, imgsrc: "assets/products/guantes.jpg" },
    { name: 'Contenedor de basura', cost: 400, imgsrc: "assets/products/contenedorbasura.jpg" },
    { name: 'Desinfecntante Lysol', cost: 90, imgsrc: "assets/products/lysol.jpg" },
    { name: 'Cepillo para inodoro', cost: 20, imgsrc: "assets/products/cepillo.jpg" }
  ];
  center = {lat: 24, lng: 12};
  zoom = 12;
  mapType = 'satellite'

  constructor() {}

  ngOnInit() {
    let map;
    let script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBxyznk1tjEUoX71HnMJszlF6ecrr0QUL8&callback=initMap",
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
    window.initMap = function () {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      })
    };
    /* let myMap = L.map('mapid').setView([25.685, -100.319], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmV0b3JvY2EiLCJhIjoiY2s5NnBleWJvMG1zazNtbXUyMGpia3FvNSJ9.694K8rik5-7Is3k0IfR0GA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 180,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYmV0b3JvY2EiLCJhIjoiY2s5NnBleWJvMG1zazNtbXUyMGpia3FvNSJ9.694K8rik5-7Is3k0IfR0GA'
    }).addTo(myMap);
    window.onresize = function (event) {
      console.log(window.innerHeight);
      //document.getElementById('mapid').style.height = `${window.innerHeight}px`;
    }; */
  }

}

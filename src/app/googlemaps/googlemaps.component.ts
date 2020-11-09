import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'

declare const L,marker;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

  constructor(private router:Router) {
    

  }

 

  async ngOnInit() {
    

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    var someFeatures = [{
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "show_on_map": true
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
      }
  }, {
      "type": "Feature",
      "properties": {
          "name": "Busch Field",
          "amenity": "Baseball Stadium",
          "show_on_map": false
      },
      "geometry": {
          "type": "polygon",
          "coordinates": [51.505, -0.10]
      }
  }];
  L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(mymap);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

   
    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
      
  var marker=L.marker([51.4, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
 

  
  marker.on('click', function onClick(){
    this.router.navigateByUrl("/super-slot");
  }.bind(this));
  
  }

  x = document.getElementById("demo");
getLocation() {
  console.log("into map");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  } else {
    this.x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

showPosition(position) {
  console.log("into map show");
  this.x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

}

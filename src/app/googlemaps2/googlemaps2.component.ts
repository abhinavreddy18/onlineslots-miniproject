import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locations1Service } from 'src/app/services/locations1.service';
import { Super } from'src/shared/super';
import { locidcon } from 'src/shared/locateconstant';
declare const L,marker;
var mymap;
@Component({
  selector: 'app-googlemaps2',
  templateUrl: './googlemaps2.component.html',
  styleUrls: ['./googlemaps2.component.css']
})
export class Googlemaps2Component implements OnInit {

  constructor(private router:Router,private locationservice: Locations1Service) { }

  markets :Super[];
  async  getLocations() {
    await this.locationservice.getlocations().then(
      res=>{
        
        this.markets = res as Super[];
        console.log(this.markets);
        
      }
    );
    
    
}

  async ngOnInit() {
    await this.getLocations();
    mymap = L.map('mapid').setView([24.5, 24.5], 13);
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
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
      
  var marker=L.marker([51.4, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
  
 

  
  marker.on('click', function onClick(){
    locidcon.id=6;
    this.router.navigateByUrl("/super-form");
  }.bind(this));
  this.setmap();
  }
  setmap(){
    var i:number;
   
   var circle;
  console.log(this.markets);
  for(i=0;i<this.markets.length;i++)
  var circle = L.marker([this.markets[i].lattitude,this.markets[i].longitude]).bindTooltip(this.markets[i].market_name,{ permanent: true }).addTo(mymap);
   
  }
  
}

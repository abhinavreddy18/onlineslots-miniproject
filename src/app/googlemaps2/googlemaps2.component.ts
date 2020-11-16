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
    mymap = L.map('mapid').setView([30, 100], 30);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

   
    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
      
  var marker=L.marker([51.4, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
  
 

  
  marker.on('click', function onClick(){
    
    this.router.navigateByUrl("/super-form");
  }.bind(this));
  this.setmap();
  }
  setmap(){
    var i:number;
   
    var circle = {};
  console.log(this.markets);
  for(i=0;i<this.markets.length;i++){
   circle[i] = L.marker([this.markets[i].lattitude,this.markets[i].longitude]).bindTooltip(this.markets[i].market_name,{ permanent: true }).addTo(mymap);
   circle[i].on('click', function (e) {
    console.log('in');
    let res = this.markets.find(locat =>{ return locat.lattitude == e.latlng.lat && locat.longitude == e.latlng.lng});
    console.log(res);
    locidcon.id=res.marketid;
    console.log(locidcon);
    //locidcon.locid = this.locat.locid;
    this.router.navigateByUrl("/super-form");
  }.bind(this));
  }
  console.log(circle);
}
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { location } from 'src/shared/location';
import { LocationserviceService } from 'src/app/services/locationservice.service';
declare const L, marker;
import { locidcon } from 'src/shared/locateconstant';
var mymap;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

  constructor(private router: Router, private locationservice: LocationserviceService) {


  }
  locs: location[];


  async getLocations() {
    await this.locationservice.getlocations().then(
      res => {

        this.locs = res as location[];
        console.log(this.locs);

      }
    );


  }

  async ngOnInit() {

    await this.getLocations();
    mymap = L.map('mapid').setView([30, 100], 13);
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
      filter: function (feature, layer) {
        return feature.properties.show_on_map;
      }
    }).addTo(mymap);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);


    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');

    var marker = L.marker([51.4, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');




    marker.on('click', function onClick() {

      locidcon.locid = 24;
      this.router.navigateByUrl("/map-2");
    }.bind(this));
    this.setmap();
  }

  setmap() {
    var i: number;

    var circle = {};
    console.log(this.locs);
    for (i = 0; i < this.locs.length; i++) {
      circle[i] = L.marker([this.locs[i].lattitude, this.locs[i].longitude]).bindTooltip(this.locs[i].name, { permanent: true }).addTo(mymap);
      circle[i].on('click', function (e) {
        console.log('in');
        let res = this.locs.find(locat =>{ return locat.lattitude == e.latlng.lat && locat.longitude == e.latlng.lng});
        console.log(res);
        locidcon.locid=res.locid;
        console.log(locidcon);
        //locidcon.locid = this.locat.locid;
        this.router.navigateByUrl("/map-2");
      }.bind(this));
    }
    console.log(circle);

  }
}





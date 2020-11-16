import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { TasksService } from '../services/tasks.service';
declare const L,marker;
var mymap;
@Component({
  selector: 'app-googlemaps3',
  templateUrl: './googlemaps3.component.html',
  styleUrls: ['./googlemaps3.component.css']
})
export class Googlemaps3Component implements OnInit {

  constructor(private tasks: TasksService) { }
  display : Slots[];
  
  async ngOnInit() {
    await this.displayslots();
    mymap = L.map('mapid').setView([30, 100], 18);
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
   
   
  }.bind(this));
  this.setmap();
  }

  async fetchDetails(){
    await this.tasks.getTasks().then(
       res => {
        this.display= res as Slots[];
        console.log(this.display);
       }
     );
    }
  
    async displayslots(){
      await this.fetchDetails();
    }

    setmap(){
      var i:number;
     
      var circle = {};
      for(i=0;i<this.display.length;i++){
        circle[i] = L.marker([this.display[i].lattitude,this.display[i].longitude]).bindTooltip(this.display[i].name,{ permanent: true }).addTo(mymap);
         //locidcon.locid = this.locat.locid;
         
    }
  }
}

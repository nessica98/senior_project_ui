import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-visualize-page',
  templateUrl: './visualize-page.component.html',
  styleUrls: ['./visualize-page.component.css']
})
export class VisualizePageComponent implements OnInit {
  dataArr:any;
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {
    var locations:any[]
    Axios.get('http://localhost:5000/allnode').then((val)=>{
      console.log(val)
      this.dataArr = val.data  
  })
  Axios.get('http://localhost:5000/allnode/latest').then((val)=>{
      console.log(val)
      locations = val.data 
      console.log(locations)
      const mapProperties = {
        center: new google.maps.LatLng(10.8463, 100.5669),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      console.log(this.mapElement)
      this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
      var infowindow = new google.maps.InfoWindow();
    
      var marker, i;
    
      for (i = 0; i < locations.length; i++) { 
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].GPSLat,locations[i].GPSLong),
          map: this.map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i].nodename);
            infowindow.open(this.map, marker);
          }
        })(marker, i));
      } 
  })
 
}

}

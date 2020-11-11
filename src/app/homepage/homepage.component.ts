import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  marker2: google.maps.Marker;
  markers: google.maps.Marker[];
  name:string;
  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService()
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoianVuaG8iLCJpZCI6MjIyLCJpYXQiOjE2MDUwMzU1NjIsImV4cCI6MTYwNTAzNzM2Mn0.ilh6bAjuzGkiOG9ntRaRU50A33gCObTgg0XOi_yVlJI'
    const decodedToken = helper.decodeToken(token);
    console.log('token, ',token)
    console.log('dec token, ',decodedToken)
    this.name = 'weme'
    const myLatLng = { lat: 13.8463, lng: 100.5669 };
    const mapProperties = {
      center: new google.maps.LatLng(13.8463, 100.5669),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    console.log(this.mapElement)
    
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
   
    new google.maps.Marker({
      position: new google.maps.LatLng(13.8433, 100.5619),
      map:this.map,
      title: "Hello World2!",
    });
    const contentString =
    `<div id="content"> +
    <p>Weki meki </p> ${this.name}
    </div>`;

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
    this.marker.addListener("click", () => {
      infowindow.open(this.map, this.marker);
    });

    
  
    //console.log(this.marker)
  }

}

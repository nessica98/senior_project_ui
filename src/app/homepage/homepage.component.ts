import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(13.8463, 100.5669),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    console.log(this.mapElement)
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
  }

}

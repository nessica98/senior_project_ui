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
    
    Axios.get('http://192.168.56.102:5000/nodedata2').then((val)=>{
      console.log(val)
      this.dataArr = val.data
      
    
  })
  const mapProperties = {
    center: new google.maps.LatLng(13.8463, 100.5669),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  console.log(this.mapElement)
  this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
  }

}

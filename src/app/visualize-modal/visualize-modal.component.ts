import { Component, OnInit,Input, ViewChild } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-visualize-modal',
  templateUrl: './visualize-modal.component.html',
  styleUrls: ['./visualize-modal.component.css']
})
export class VisualizeModalComponent implements OnInit {
  @Input('nodename')nodeName;
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  dataArr_recv:any;
  constructor() { }
  helloworld(ss){
    console.log('click')
    console.log(ss)
    console.log(this.nodeName)
    
  }

  ngOnInit(): void {
    console.log(this.nodeName)
    //Axios.get(`http://localhost:5000/data/${this.nodeName}`)
    Axios.get(`http://localhost:5000/nodegps/${this.nodeName}`).then((resp)=>{
        console.log(resp)
        this.dataArr_recv = resp.data
        console.log(this.dataArr_recv)
        //this.dataArr_recv = this.dataArr_recv.filter((data)=>{return data.nodeName === this.nodeName})
        this.dataArr_recv = this.dataArr_recv.slice(0,10)
        const mapProperties = {
          center: new google.maps.LatLng(10.8463, 100.5669),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(this.mapElement)
        this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
        
        var flightPlanCoordinates = [
          { lat: 37.772, lng: -122.214 },
          { lat: 21.291, lng: -157.821 },
          { lat: -18.142, lng: 178.431 },
          { lat: -27.467, lng: 153.027 },
        ];
        flightPlanCoordinates = this.dataArr_recv.map((val)=>{
          return {lat:val.GPSLat,lng:val.GPSLong}
        })
        console.log(flightPlanCoordinates)
        const flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });
      
        flightPath.setMap(this.map);

      })
    console.log(this.dataArr_recv)
  }

}

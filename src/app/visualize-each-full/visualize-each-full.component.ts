import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NodedataService } from '../services/nodedata.service';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';



@Component({
  selector: 'app-visualize-each-full',
  templateUrl: './visualize-each-full.component.html',
  styleUrls: ['./visualize-each-full.component.css']
})
export class VisualizeEachFullComponent implements OnInit {
  nodedata:any[];
  allgpsdata:any[];
  nodenotfound: boolean = true;
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  marker2: google.maps.Marker;
  markers: google.maps.Marker[] = [];
  map2: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nd: NodedataService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const { node } = params
      if (!node) {
        this.router.navigate(['/'])
      }
      this.nd.GetFilterGPSval(node).then((val)=>{
        this.allgpsdata = val
        console.log(this.allgpsdata)
        const mapProperties = {
              center: new google.maps.LatLng(13.8463, 100.5669),
              zoom: 12,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            console.log(this.mapElement)
            
            this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
            
            this.allgpsdata.forEach((val,idx)=>{
              //console.log(val.nodeGPScoordinate.coordinates)
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.lat, val.lng),
                map:this.map,
                title: "Hello World2!",
              })
              this.markers.push(marker)
            })
      })

      // this.nd.GetOneNodeData(node).then((val) => {
      //   this.nodedata = val.result_nodedata_filt
      //   this.allgpsdata = val.result_all.data
      //   console.log(this.allgpsdata)
      //   if(this.nodedata.length>0) this.nodenotfound = false;

      //   // map free render
        
      //   // map render
      //   const mapProperties = {
      //     center: new google.maps.LatLng(13.8463, 100.5669),
      //     zoom: 12,
      //     mapTypeId: google.maps.MapTypeId.ROADMAP
      //   };
      //   console.log(this.mapElement)
        
      //   this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
        
      //   // this.allgpsdata.forEach((val,idx)=>{
      //   //   //console.log(val.nodeGPScoordinate.coordinates)
      //   //   let marker = new google.maps.Marker({
      //   //     position: new google.maps.LatLng(val.nodeGPScoordinate.coordinates[0], val.nodeGPScoordinate.coordinates[1]),
      //   //     map:this.map,
      //   //     title: "Hello World2!",
      //   //   })
      //   //   this.markers.push(marker)
      //   // })
        
        
      //   // this.marker2[2] = new google.maps.Marker({
      //   //   position: new google.maps.LatLng(13.8433, 100.5619),
      //   //   map:this.map,
      //   //   icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
      //   //   title: "Hello World2!",
      //   // });
        
      // })
    })

  }

}

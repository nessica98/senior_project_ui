import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NodedataService } from '../services/nodedata.service';


declare var ol: any;
@Component({
  selector: 'app-visualize-each-full',
  templateUrl: './visualize-each-full.component.html',
  styleUrls: ['./visualize-each-full.component.css']
})
export class VisualizeEachFullComponent implements OnInit {
  nodedata:any[];
  nodenotfound: boolean = true;
  map:any;
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
      this.nd.GetOneNodeData(node).then((val) => {
        this.nodedata = val.result_nodedata_filt

        console.log(this.nodedata)
        if(this.nodedata.length>0) this.nodenotfound = false;

        // map render
        this.map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([73.8567, 18.5204]),
            zoom: 8
          })
        });
      })
    })

  }

}

import { Component, OnInit } from '@angular/core';
import nodeData from '../nodeData.interface';
import { NodedataService } from '../services/nodedata.service';

@Component({
  selector: 'app-visualize-page-new',
  templateUrl: './visualize-page-new.component.html',
  styleUrls: ['./visualize-page-new.component.css']
})
export class VisualizePageNewComponent implements OnInit {
  loading: boolean = true;
  notfound: boolean = false;
  error: boolean = false;
  nodeData_arr: nodeData[];
  constructor(private nd: NodedataService) { }

  ngOnInit(): void {
    this.nd.GetNodeData().then((result) => {
      this.nodeData_arr = result
      if(this.nodeData_arr.length < 1) this.notfound = true;
      this.loading = false;
    }).catch((reason)=>{
      alert(reason);
      this.error = true;
    })
    
  }

}

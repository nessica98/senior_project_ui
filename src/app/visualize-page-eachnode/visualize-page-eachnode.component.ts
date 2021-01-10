import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NodedataService } from '../services/nodedata.service';

@Component({
  selector: 'app-visualize-page-eachnode',
  templateUrl: './visualize-page-eachnode.component.html',
  styleUrls: ['./visualize-page-eachnode.component.css']
})
export class VisualizePageEachnodeComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {})
  }

}

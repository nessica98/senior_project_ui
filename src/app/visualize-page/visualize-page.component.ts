import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-visualize-page',
  templateUrl: './visualize-page.component.html',
  styleUrls: ['./visualize-page.component.css']
})
export class VisualizePageComponent implements OnInit {
  dataArr:any;
  constructor() { }

  ngOnInit(): void {
    Axios.get('http://localhost:5000/nodedata').then((val)=>{
      console.log(val)
      this.dataArr = val.data
      
    
  })
  }

}

import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-nodelist',
  templateUrl: './nodelist.component.html',
  styleUrls: ['./nodelist.component.css']
})
export class NodelistComponent implements OnInit {
  dataArr:any[];
  constructor() { }

  pollingData() {
    Axios.get('http://localhost:5000/getdata').then((val)=>{
      console.log(val)
      this.dataArr = val.data
    
    
  })
  }
  ngOnInit(): void {
    Axios.get('http://localhost:5000/getdata').then((val)=>{
      console.log(val)
      this.dataArr = val.data
    
    
  })
  }
}



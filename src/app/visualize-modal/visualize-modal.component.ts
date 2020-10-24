import { Component, OnInit,Input } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-visualize-modal',
  templateUrl: './visualize-modal.component.html',
  styleUrls: ['./visualize-modal.component.css']
})
export class VisualizeModalComponent implements OnInit {
  @Input('nodename')nodeName:String;
  dataArr_recv:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.nodeName)
    //Axios.get(`http://localhost:5000/data/${this.nodeName}`)
    const btn = document.getElementsByClassName("btnDetail");
    btn.addEventListener("click",(e)=>{
      Axios.get(`http://localhost:5000/data/${this.nodeName}`).then((resp)=>{
        console.log(resp)
        this.dataArr_recv = resp.data
      })
    })
  }

}

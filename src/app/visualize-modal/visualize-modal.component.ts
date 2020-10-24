import { Component, OnInit,Input } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-visualize-modal',
  templateUrl: './visualize-modal.component.html',
  styleUrls: ['./visualize-modal.component.css']
})
export class VisualizeModalComponent implements OnInit {
  @Input('nodename')nodeName;
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
    Axios.get(`http://localhost:5000/fakedata/${this.nodeName}`).then((resp)=>{
        console.log(resp)
        this.dataArr_recv = resp.data
        console.log(this.dataArr_recv)
        //this.dataArr_recv = this.dataArr_recv.filter((data)=>{return data.nodeName === this.nodeName})
        this.dataArr_recv = this.dataArr_recv.slice(0,10)
      })
    console.log(this.dataArr_recv)
  }

}

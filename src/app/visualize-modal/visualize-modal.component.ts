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
<<<<<<< HEAD
    const btn = document.getElementsByClassName("btnDetail");
    btn.addEventListener("click",(e)=>{
      Axios.get(`http://localhost:5000/data/${this.nodeName}`).then((resp)=>{
        console.log(resp)
        this.dataArr_recv = resp.data
=======
    Axios.get(`http://localhost:5000/fakedata/${this.nodeName}`).then((resp)=>{
        console.log(resp)
        this.dataArr_recv = resp.data
        console.log(this.dataArr_recv)
        //this.dataArr_recv = this.dataArr_recv.filter((data)=>{return data.nodeName === this.nodeName})
        this.dataArr_recv = this.dataArr_recv.slice(0,10)
>>>>>>> a734d686459f1a07e8d743b3d5c38b207149b0be
      })
    console.log(this.dataArr_recv)
  }

}

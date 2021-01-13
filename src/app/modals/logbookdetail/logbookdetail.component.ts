import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logbookdetail',
  templateUrl: './logbookdetail.component.html',
  styleUrls: ['./logbookdetail.component.css']
})
export class LogbookdetailComponent implements OnInit {
  @Input('id') id;
  @Input('data') logbook:any;
  logbooklist:any;
  genId():string{
    return 'modal'+this.id
  }
  constructor() { 
    //this.id = this.id;
    
  }

  ngOnInit(): void {
    //console.log(this.genId())
    this.logbooklist = this.logbook.lists
    // console.log(this.logbook)
    // console.log(this.logbooklist)
    
  }

}

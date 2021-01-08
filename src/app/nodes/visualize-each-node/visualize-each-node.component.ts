import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualize-each-node',
  templateUrl: './visualize-each-node.component.html',
  styleUrls: ['./visualize-each-node.component.css']
})
export class VisualizeEachNodeComponent implements OnInit {
  @Input('nodeData') nodeData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.nodeData)
  }

}

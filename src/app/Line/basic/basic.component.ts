import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'line-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  //@ViewChild('chart', {static: true}) chart: NgMschartComponent;

  title: object;
  series: any[];
  xaxis: object;
  chartD: any = {
    height: 320,
    type: 'line',
    zoom: {
      enabled: false
    },
    shadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
    }
  }
  constructor() { 
    this.title= {
      text: 'Product Trends by Month',
      align: 'left'
    };
    this.series =  [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];
    this.xaxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }

  ngOnInit() {
  }
}

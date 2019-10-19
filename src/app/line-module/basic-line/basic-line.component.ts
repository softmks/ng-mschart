import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.css']
})
export class BasicLineComponent implements OnInit {

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

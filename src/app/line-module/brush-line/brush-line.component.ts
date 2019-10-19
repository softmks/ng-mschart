import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brush-line',
  templateUrl: './brush-line.component.html',
  styleUrls: ['./brush-line.component.css']
})
export class BrushLineComponent implements OnInit {

  //@ViewChild('chart-line2', {static: true}) chart2: NgMschartComponent;
  //@ViewChild('chart-line', {static: true}) chart: NgMschartComponent;

  title: object = {
    text: 'Product Trends by Month',
    align: 'left'
  };;
  chartD2: object= {
    id: 'chart2',
    type: 'line',
    height: 230,
    toolbar: {
    autoSelected: 'pan',
    show: false
    }
  };
  colors2: any = ['#546E7A'];
  stroke2: object = {
    width: 3
  };
  dataLabels2: object = {
    enabled: false
  };
  fill2: object ={
    opacity: 1,
  };
  markers2: object ={
    size: 0
  };
  series2: any[];//=[{data: data}];
  xaxis2: object = {
    type: 'datetime'
  };


  chartD1: object= {
    id: 'chart1',
    height: 130,
    type: 'area',
    brush:{
      target: 'chart2',
      enabled: true
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date('19 Jun 2017').getTime(),
        max: new Date('14 Aug 2017').getTime()
      }
    },       
  };
  colors1: any = ['#008FFB'];
  series1: any[];//=[{data: data}];
  fill1: object = {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    }
  };
  xaxis1: object = {
    type: 'datetime',
    tooltip: {
      enabled: false
    }
  };
  yaxis1: object ={
    tickAmount: 2
  };
  constructor() { 
    let data = this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
      min: 30,
      max: 90
    });
    this.series2 =  [{
      data: data
    }];
    this.series1 =  [{
      data: data
    }];
  }
  generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
  }

  ngOnInit() {
  }

}

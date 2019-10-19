import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styleUrls: ['./sparklines.component.css']
})
export class SparklinesComponent implements OnInit {
  sparklineData: any[] = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
  spark1:any= {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    series: [],
    yaxis: {
      min: 0
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$424,652',
      offsetX: 0,
      style: {
        fontSize: '24px',
        cssClass: 'mscharts-yaxis-title'
      }
    },
    subtitle: {
      text: 'Sales',
      offsetX: 0,
      style: {
        fontSize: '14px',
        cssClass: 'mscharts-yaxis-title'
      }
    }
  };
  constructor() { 
    this.spark1.series.push({
      data: this.randomizeArray(this.sparklineData)
    })
  }

  ngOnInit() {
  }

  randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

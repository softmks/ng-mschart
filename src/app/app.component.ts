import { Component, ViewChild } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {NgMschartsComponent} from 'ng-mscharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mscharts-angular';
  @ViewChild('chart', {static: true}) chart: NgMschartsComponent;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('Basic Chart'),
      type: new FormControl('line'),
      height: new FormControl(350),
      series: new FormArray([
        new FormGroup({
          name: new FormControl('Series'),
          type: new FormControl('line'),
          data: new FormArray([
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100))
          ])
        })
      ]),
      xaxis: new FormArray([
        new FormControl('Jan'),
        new FormControl('Feb'),
        new FormControl('Mar'),
        new FormControl('Apr'),
        new FormControl('May'),
        new FormControl('Jun'),
        new FormControl('Jul')
      ])
    });
  }

  addValue() {
    (<FormArray>this.form.get('series')).controls.forEach((c) => {
      (<FormArray>c.get('data')).push(new FormControl(this.getRandomArbitrary(0, 100)));
    });
    (<FormArray>this.form.get('xaxis')).push(new FormControl('Jan'));
  }

  addSeries() {
    (<FormArray>this.form.get('series')).push(new FormGroup({
      name: new FormControl('Series'),
      type: new FormControl('line'),
      data: new FormArray([
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100))
      ])
    }));
  }

  private getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

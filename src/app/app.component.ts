import { Component, ViewChild } from '@angular/core';
import { NgMschartComponent } from 'projects/ng-mschart/src/lib/ng-mschart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * AppComponent
 */
export class AppComponent {
  title = 'mscharts-angular';
  @ViewChild('chart', {static: true}) chart: NgMschartComponent;

  show: any = {
    line_basic: false,
    line_brush: false
  }
  carot = 'fa-caret-down';
  lineTypesDisplay: string= 'none';

  constructor() {
  }

  private getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  onClick($event, from){
    let self = this;
    self.showDefault();
    self.show[from] =  true;
  }
  showDefault(){
    let self = this;
    Object.keys(self.show).forEach(key => self.show[key] = false);
  }
  expand($event, from){
    let self = this;
    self.lineTypesDisplay = self.lineTypesDisplay === 'block' ? 'none' : 'block';
    self.carot = self.carot === 'fa-caret-down' ? 'fa-caret-up' : 'fa-caret-down'
  }
}

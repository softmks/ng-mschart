import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import {
  MSAnnotations,
  MSAxisChartSeries,
  MSChart,
  MSDataLabels,
  MSFill,
  MSGrid,
  MSLegend,
  MSNonAxisChartSeries,
  MSMarkers,
  MSNoData,
  MSPlotOptions,
  MSResponsive,
  MSStates,
  MSStroke, MSTheme, MSTitleSubtitle,
  MSTooltip,
  MSXAxis,
  MSYAxis
} from './model/ms-types';

import { asapScheduler } from 'rxjs';
import { default as MSCharts } from 'mschart';

@Component({
  selector: 'ng-mschart',
  template: `
    <div #chart></div>
  `,
  styles: []
})
export class NgMschartComponent implements OnInit {
  @Input() chart: MSChart;
  @Input() annotations: MSAnnotations;
  @Input() colors: any[];
  @Input() dataLabels: MSDataLabels;
  @Input() series: MSAxisChartSeries | MSNonAxisChartSeries;
  @Input() stroke: MSStroke;
  @Input() labels: string[];
  @Input() legend: MSLegend;
  @Input() markers: MSMarkers;
  @Input() noData: MSNoData;
  @Input() fill: MSFill;
  @Input() tooltip: MSTooltip;
  @Input() plotOptions: MSPlotOptions;
  @Input() responsive: MSResponsive[];
  @Input() xaxis: MSXAxis;
  @Input() yaxis: MSYAxis | MSYAxis[];
  @Input() grid: MSGrid;
  @Input() states: MSStates;
  @Input() title: MSTitleSubtitle;
  @Input() subtitle: MSTitleSubtitle;
  @Input() theme: MSTheme;
  
  @Input() autoUpdateSeries = true;
  
  private chartObj: any;

  @ViewChild('chart', {static: true}) private chartElement: ElementRef;
  
  constructor() { }

  ngOnInit() {
    asapScheduler.schedule(() => {
      this.createElement();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    asapScheduler.schedule(() => {
      if (this.autoUpdateSeries && Object.keys(changes).filter(c => c !== 'series').length === 0) {
        this.updateSeries(this.series, true);
        return;
      }

      this.createElement();
    });
  }
  private createElement() {
    const options: any = {};

    if (this.annotations) { options.annotations = this.annotations; }
    if (this.chart) { options.chart = this.chart; }
    if (this.colors) { options.colors = this.colors; }
    if (this.dataLabels) { options.dataLabels = this.dataLabels; }
    if (this.series) { options.series = this.series; }
    if (this.stroke) { options.stroke = this.stroke; }
    if (this.labels) { options.labels = this.labels; }
    if (this.legend) { options.legend = this.legend; }
    if (this.fill) { options.fill = this.fill; }
    if (this.tooltip) { options.tooltip = this.tooltip; }
    if (this.plotOptions) { options.plotOptions = this.plotOptions; }
    if (this.responsive) { options.responsive = this.responsive; }
    if (this.markers) { options.markers = this.markers; }
    if (this.noData) { options.noData = this.noData; }
    if (this.xaxis) { options.xaxis = this.xaxis; }
    if (this.yaxis) { options.yaxis = this.yaxis; }
    if (this.grid) { options.grid = this.grid; }
    if (this.states) { options.states = this.states; }
    if (this.title) { options.title = this.title; }
    if (this.subtitle) { options.subtitle = this.subtitle; }
    if (this.theme) { options.theme = this.theme; }

    if (this.chartObj) {
      this.chartObj.destroy();
    }

    console.log(this.chartElement);
    console.log(options);

    this.chartObj = new MSCharts(
      this.chartElement.nativeElement,
      options
    );
    console.log(this.chartObj);
    this.render();
  }
  public render(): Promise<void> {
    return this.chartObj.render();
  }
  public updateSeries(newSeries: MSAxisChartSeries | MSNonAxisChartSeries, animate: boolean) {
    this.chartObj.updateSeries(newSeries, animate);
  }

  public appendSeries(newSeries: MSAxisChartSeries | MSNonAxisChartSeries, animate?: boolean) {
    this.chartObj.appendSeries(newSeries, animate);
  }

  public toggleSeries(seriesName: string) {
    this.chartObj.toggleSeries(seriesName);
  }

  public resetSeries() {
    this.chartObj.resetSeries();
  }

  public toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number) {
    this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
  }

  public destroy() {
    this.chartObj.destroy()
  }
  public addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any) {
    this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
  }

  public addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any) {
    this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
  }

  public addPointAnnotation(options: any, pushToMemory?: boolean, context?: any) {
    this.chartObj.addPointAnnotation(options, pushToMemory, context);
  }

  public addText(options: any, pushToMemory?: boolean, context?: any) {
    this.chartObj.addText(options, pushToMemory, context);
  }

  public dataURI(): Promise<void> {
    return this.chartObj.dataURI();
  }
}

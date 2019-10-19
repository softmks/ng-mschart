import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMschartModule } from 'projects/ng-mschart/src/lib/ng-mschart.module';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { BrushLineComponent } from './brush-line/brush-line.component';
import { DashedLineComponent } from './dashed-line/dashed-line.component';
import { GradientLineComponent } from './gradient-line/gradient-line.component';
import { WithAnnotationsLineComponent } from './with-annotations-line/with-annotations-line.component';
import { WithDataLabelsLineComponent } from './with-data-labels-line/with-data-labels-line.component';
import { WithImageLineComponent } from './with-image-line/with-image-line.component';
import { WithMissingDataLineComponent } from './with-missing-data-line/with-missing-data-line.component';
import { LogarithmicLineComponent } from './logarithmic-line/logarithmic-line.component';
import { RealtimeLineComponent } from './realtime-line/realtime-line.component';
import { SteplineLineComponent } from './stepline-line/stepline-line.component';
import { SyncingChartLineComponent } from './syncing-chart-line/syncing-chart-line.component';
import { ZoomableTimeSeriesLineComponent } from './zoomable-time-series-line/zoomable-time-series-line.component';



@NgModule({
  declarations: [BasicLineComponent, BrushLineComponent, DashedLineComponent, GradientLineComponent, WithAnnotationsLineComponent, WithDataLabelsLineComponent, WithImageLineComponent, WithMissingDataLineComponent, LogarithmicLineComponent, RealtimeLineComponent, SteplineLineComponent, SyncingChartLineComponent, ZoomableTimeSeriesLineComponent],
  imports: [
    CommonModule,
    NgMschartModule
  ], 
  exports:[BasicLineComponent, BrushLineComponent]
})
export class LineModuleModule { }

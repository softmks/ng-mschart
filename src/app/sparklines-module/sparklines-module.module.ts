import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMschartModule } from 'projects/ng-mschart/src/lib/ng-mschart.module';
import { SparklinesComponent } from './sparklines/sparklines.component';



@NgModule({
  declarations: [SparklinesComponent],
  imports: [
    CommonModule,
    NgMschartModule
  ],
  exports: [SparklinesComponent]
})
export class SparklinesModuleModule { }

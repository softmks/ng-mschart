import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { NgMschartModule } from 'ng-mscharts';
//import { NgMschartModule } from '../../projects/ng-mschart/src/lib/ng-mschart.module';
import { SeriesPipe } from './series.pipe';
import { NgMschartModule } from 'projects/ng-mschart/src/lib/ng-mschart.module';
import { BasicComponent } from './Line/basic/basic.component';
import { BrushComponent } from './Line/brush/brush.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesPipe,
    BasicComponent,
    BrushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMschartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

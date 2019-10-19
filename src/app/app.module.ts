import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { NgMschartModule } from 'ng-mscharts';
//import { NgMschartModule } from '../../projects/ng-mschart/src/lib/ng-mschart.module';
import { SeriesPipe } from './series.pipe';
import { NgMschartModule } from 'projects/ng-mschart/src/lib/ng-mschart.module';
import { LineModuleModule } from './line-module/line-module.module';
import { SparklinesModuleModule } from './sparklines-module/sparklines-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SeriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMschartModule,
    LineModuleModule,
    SparklinesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

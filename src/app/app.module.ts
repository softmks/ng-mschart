import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { NgMschartsModule } from 'ng-mschart';
import { NgMschartModule } from '../../projects/ng-mschart/src/lib/ng-mschart.module';
import { SeriesPipe } from './series.pipe';

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
    NgMschartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

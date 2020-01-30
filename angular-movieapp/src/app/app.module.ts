import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { Evaluation2Component } from './components/evaluation/evaluation2.component';
import { EvalComponent } from './components/eval/eval.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MovielistComponent,
    Evaluation2Component,
    EvalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

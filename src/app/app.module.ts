import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentDetailService} from '../app/student-detail.service';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { HttpClientModule } from '@angular/common/http';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Subcomponent1Component,
    Subcomponent2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentDetailService} from '../app/student-detail.service';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { HttpClientModule } from '@angular/common/http';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent1/subcomponent2/subcomponent2.component';
import { RouterModule,Routes } from '@angular/router';
import { Route } from '@angular/router';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Subcompo1Component } from './assignment3/subcompo1/subcompo1.component';
import { Subcompo2Component } from './assignment3/subcompo2/subcompo2.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { ChildcomponentComponent } from './assignment4/childcomponent/childcomponent.component';
import { Subcom1Component } from './assignment4/subcom1/subcom1.component';
import { Subcom2Component } from './assignment4/subcom2/subcom2.component';
import { Subcom3Component } from './assignment4/subcom3/subcom3.component';
import { Routecomp1Component } from './assignment4/routecomp1/routecomp1.component';
import { Routecomp2Component } from './assignment4/routecomp2/routecomp2.component';
import { Routecomp3Component } from './assignment4/routecomp3/routecomp3.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Assignment6Component } from './assignment6/assignment6.component';

import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Assignment7Component } from './assignment7/assignment7.component';
import {MatTableModule} from '@angular/material/table';
export const AssignmentRoute : Routes = [
{ path: 'assign1', component: Assignment1Component },
{ path: 'assign2', component: Subcomponent1Component },
{ path: 'assign3', component:  Assignment3Component },
{ path: 'assign4', component:  Assignment4Component },
{ path: 'assign5', component:  Assignment5Component },
{ path: 'assign6', component:  Assignment6Component },
{ path: 'assign7', component:  Assignment7Component },
{ path: '**', component:  PagenotfoundComponent }
]
// export const Assignment4 : Routes = [
//   { path: 'route1', component: Routecomp1Component },
//   { path: 'route2', component: Routecomp2Component },
//   { path: 'route3', component: Routecomp3Component }
//   ]
export const assign4: Route = 
{
    path: 'assign4',
    component: Assignment4Component,
    children :[
            { path: 'assign4/route1', component: Routecomp1Component },
            { path: 'assign4/route2', component: Routecomp2Component },
            { path: 'assign4/route3', component: Routecomp3Component }
          ]
}
@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Subcomponent1Component,
    Subcomponent2Component,
    Assignment3Component,
    Subcompo1Component,
    Subcompo2Component,
    Assignment4Component,
    ChildcomponentComponent,
    Subcom1Component,
    Subcom2Component,
    Subcom3Component,
    Routecomp1Component,
    Routecomp2Component,
    Routecomp3Component,
    Assignment5Component,
    PagenotfoundComponent,
    Assignment6Component,
    CompSuccessDirective,
    CompFailureDirective,
    Assignment7Component ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AssignmentRoute ),
    // RouterModule.forRoot(Assignment4),
    RouterModule.forRoot([assign4], { useHash: true }),
    FormsModule,CommonModule,MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,
  ],
  providers: [StudentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

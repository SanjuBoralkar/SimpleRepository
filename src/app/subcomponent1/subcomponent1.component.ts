import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../student-detail.service';
@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  constructor(private Studservice:StudentDetailService) { }
  public studentInfo:any=[];

  showData(){
    return this.Studservice.displayInfo().subscribe(data =>this.studentInfo=data);
  }

  ngOnInit() {
  }

}

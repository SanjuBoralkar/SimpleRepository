import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../student-detail.service';
@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  constructor(private studService:StudentDetailService) { }
  public StudentInfo:any=[];

  showData(){
    return this.studService.displayInfo().subscribe(data=>this.StudentInfo=data);
  }

  ngOnInit() {
  }

}

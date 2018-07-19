import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../../student-detail.service';

@Component({
  selector: 'app-subcom2',
  templateUrl: './subcom2.component.html',
  styleUrls: ['./subcom2.component.css']
})
export class Subcom2Component implements OnInit {

  public studentinfo:any=[];
  constructor(private studentdetailservice:StudentDetailService) { }

  showInfo(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }

  ngOnInit() {
  }

}

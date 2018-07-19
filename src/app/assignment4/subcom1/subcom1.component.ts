import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../../student-detail.service';

@Component({
  selector: 'app-subcom1',
  templateUrl: './subcom1.component.html',
  styleUrls: ['./subcom1.component.css']
})
export class Subcom1Component implements OnInit {

  public studentinfo:any=[];
  constructor(private studentdetailservice:StudentDetailService) { }

  showInfo(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  ngOnInit() {
  }

}

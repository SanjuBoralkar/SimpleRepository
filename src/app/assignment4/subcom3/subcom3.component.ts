import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../../student-detail.service';

@Component({
  selector: 'app-subcom3',
  templateUrl: './subcom3.component.html',
  styleUrls: ['./subcom3.component.css']
})
export class Subcom3Component implements OnInit {

  public studentinfo:any=[];
  constructor(private studentdetailservice:StudentDetailService) { }

  showInfo(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  ngOnInit() {
  }

}

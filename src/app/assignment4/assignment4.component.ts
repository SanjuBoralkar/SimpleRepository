import { Component, OnInit,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import {StudentDetailService} from '../student-detail.service';
import { Subcom1Component } from './subcom1/subcom1.component';
import { Subcom2Component } from './subcom2/subcom2.component';
import { Subcom3Component } from './subcom3/subcom3.component';
import { Subcompo1Component } from '../assignment3/subcompo1/subcompo1.component';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
    constructor(private studentdetailservice:StudentDetailService) { }
//     @Input() title;
//  message: string = "hello sanjay !"

 public studentinfo:any=[];
  // @Output() messageEvent = new EventEmitter<string>();

  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  //}
  showInfocom1(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  showInfo1(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  showInfo2(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  showSoln1(){
    this.ques1=true;
    }
    showSoln2(){
      this.ques2=true;
      }
      showSoln3(){
        this.ques3=true;
        }

      @ViewChild(Subcom1Component) child:Subcom1Component;
      @ViewChild(Subcom2Component) child1:Subcom2Component;
      @ViewChild(Subcom3Component) child2:Subcom3Component;
      showinformation(){
        // child is set
        this.child.showInfo();
      }
      showinformation1(){
        // child is set
        this.child1.showInfo();
      }
      showinformation2(){
        // child is set
        this.child2.showInfo();
      }

  ngOnInit() {
  }

}

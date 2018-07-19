import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {StudentDetailService} from '../student-detail.service';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  // constructor(private studentdetailservice:StudentDetailService) { }
//   @Input() title;
//  message: string = "hello sanjay !"

//  public studentinfo:any=[];
//   @Output() messageEvent = new EventEmitter<string>();

//   sendMessage() {
//     this.messageEvent.emit(this.message)
//   }
//   showInfo(){
//     this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
//   }
 public title="infosys";
 public Name="String interpolation is working";
 public ques1:boolean;
 public ques2:boolean;
 public ques3:boolean;
 public ques4:boolean;
 title1="infosys";
 title2="Join us to show your potential";
 showSoln1(){
 this.ques1=true;
 }
 showSoln2(){
  this.ques2=true;
  }
  showSoln3(){
    this.ques3=true;
    }
    showSoln4(){
      this.ques4=true;
      }
  ngOnInit() {
  }

}

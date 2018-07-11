import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {StudentDetailService} from '../student-detail.service';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor(private studentdetailservice:StudentDetailService) { }
 // @Input() title;
 message: string = "hello sanjay !"
 public studentinfo:any=[];
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  showInfo(){
    this.studentdetailservice.displayInfo().subscribe(data=>this.studentinfo=data);
  }
  ngOnInit() {
  }

}

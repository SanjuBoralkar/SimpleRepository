import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {

  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  showSoln1(){
    this.ques1=true;
    }
    showSoln2(){
      this.ques2=true;
      }
  constructor() { }

  ngOnInit() {
  }

}

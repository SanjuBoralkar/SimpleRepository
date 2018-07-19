import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit {
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  public assign5;
  public sname:any;
  public saddress:any;
  public sgender:any;
  public smobile:any;
  public scollege:any;
  public semail:any;
  public firstName:any;

  showSoln1(){
    this.ques1=true;
    }
    showSoln2(){
      this.ques2=true;
      }
      showSoln3(){
        this.ques3=true;
        }
      displayData(){
        console.log(this.sname);
        console.log(this.saddress);
        console.log(this.sgender);
        console.log(this.smobile);
        console.log(this.scollege);
        console.log(this.semail);
      }
  constructor() { }

  ngOnInit() {
  }

}

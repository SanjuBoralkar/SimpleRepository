import { Component, OnInit } from '@angular/core';
import {StudentDetailService} from '../student-detail.service';
@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {
  title2="infosys";
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  public str:string="styles: ['{  background-color:antiquewhite; }']";
  public str1:string="<MarvellousComp-Componet></MarvellousComp-Componet>";
  
  // constructor(private Studservice:StudentDetailService) { }
  // public studentInfo:any=[];

  // showData(){
  //   return this.Studservice.displayInfo().subscribe(data =>this.studentInfo=data);
  // }
  showSoln1(){
    this.ques1=true;
    }
    showSoln2(){
      this.ques2=true;
      }
      showSoln3(){
        this.ques3=true;
        }

  ngOnInit() {
  }

}

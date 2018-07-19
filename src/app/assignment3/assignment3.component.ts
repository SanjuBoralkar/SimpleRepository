import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  public ques4:boolean;
  public ques5:boolean;
  public title;
  title1;
  title2;
  title3 = "Infosys";

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
          showSoln5(){
            this.ques5=true;
            }
      fun(){
      this.title="fun() is called";
      }
      ClickMe(){
        this.title1="infosys";
        this.title2="Join us to show your potential";
      } 
      ChangeData(){
        this.title3="Capgemini";
      }

  constructor() { }

  ngOnInit() {
  }

}

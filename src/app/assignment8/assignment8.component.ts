import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-assignment8',
  templateUrl: './assignment8.component.html',
  styleUrls: ['./assignment8.component.css']
})
export class Assignment8Component implements OnInit {
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  public ques4:boolean;
  names="sanjay";
  items=["Angular5","ReactJs","Express"];
  newItem="";
  day = new Date(1991,5,5);
  arr=[3,5,8,6,7,9,1];
  showSoln1() {
      this.ques1=true;
    }
    showSoln2() {
      this.ques2=true;
    }
    showSoln3() {
      this.ques3=true;
    }
    showSoln4() {
      this.ques4=true;
    }
  pushItem = function() {
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index) {
  this.items.splice(index,1);
}
constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

}

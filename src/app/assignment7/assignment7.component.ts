import { Component, OnInit } from '@angular/core';

export interface city {
  value: string;
  viewValue: string;
}
export interface type {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public ques1:boolean;
  public ques2:boolean;
  public ques3:boolean;
  public ques4:boolean;
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
         cities: city[] = [
    {value: 'steak-0', viewValue: 'Nagpur'},
    {value: 'pizza-1', viewValue: 'Pune'},
    {value: 'tacos-2', viewValue: 'Hydrabad'}
  ];
   types: type[] = [
    {value: 'steak-0', viewValue: 'sport'},
    {value: 'pizza-1', viewValue: 'oddi'},
    {value: 'tacos-2', viewValue: 'ferari'}
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
 


}

import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {
  constructor( private ele:ElementRef) { }
  
  @HostListener('mouseover') ondown() 
  {
    this.ele.nativeElement.style.backgroundColor = "green";
    
  }
  // @HostListener('mouseenter') onenter() 
  // {
  //   this.ele.nativeElement.style.backgroundColor = "pink";
    
  // }
  @HostListener('mouseleave') onup() 
  {
    this.ele.nativeElement.style.backgroundColor = "white";
    
  }

}

  

 

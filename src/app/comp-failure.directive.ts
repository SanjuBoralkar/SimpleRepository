import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor( private ele:ElementRef) { }
  
  @HostListener('mouseenter') onover() 
  {
    this.ele.nativeElement.style.backgroundColor = "yellow";
    this.ele.nativeElement.style.color = "green";
    this.ele.nativeElement.style.fontSize = "110px";
  // }
  // @HostListener('mouseenter') onenter() 
  // {
  //   this.ele.nativeElement.style.backgroundColor = "pink";
    
   }
  @HostListener('mouseleave') onleave() 
  {
    this.ele.nativeElement.style.backgroundColor = "white"; 
    this.ele.nativeElement.style.fontSize = "20px";
 }

}

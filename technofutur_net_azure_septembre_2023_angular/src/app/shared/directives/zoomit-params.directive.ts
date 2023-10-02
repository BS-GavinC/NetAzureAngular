import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ZoomitParams]'
})
export class ZoomitParamsDirective {

  @Input() ZoomitParams : any[] = []

  constructor(private el : ElementRef) { }


  
  @HostListener("mouseenter") onMouseEnter(){
    this.el.nativeElement.style.fontSize = this.ZoomitParams[1] + "px"
    this.el.nativeElement.style.color = this.ZoomitParams[0]
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.fontSize = "15px"
    this.el.nativeElement.style.color = "black"
  }

}

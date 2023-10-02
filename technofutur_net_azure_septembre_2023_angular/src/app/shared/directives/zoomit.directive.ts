import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Zoomit]'
})
export class ZoomitDirective {

  constructor(private el : ElementRef)
  { 
    this.el.nativeElement.style.color = "red"
    this.el.nativeElement.style.fontSize = "20px"
    this.el.nativeElement.style.fontWeight = "bold"
    this.el.nativeElement.style.fontStyle = "italic"
    this.el.nativeElement.style.textDecoration = "underline"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

}

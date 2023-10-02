import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Zoomitevent]'
})
export class ZoomiteventDirective {

  constructor(private el : ElementRef) { }


  @HostListener("mouseenter") onMouseEnter(){
    // this.el.nativeElement.style.color = "red"
     this.el.nativeElement.style.fontSize = "25px"
    // this.el.nativeElement.style.fontWeight = "bold"
    // this.el.nativeElement.style.fontStyle = "italic"
    // this.el.nativeElement.style.textDecoration = "underline"
    // this.el.nativeElement.style.backgroundColor = "yellow"

    this.el.nativeElement.classList.add("red", "accent-4")
    this.el.nativeElement.classList.remove("white")
  }

  @HostListener("mouseleave") onMouseLeave(){
    //this.el.nativeElement.style.color = "black"
    this.el.nativeElement.style.fontSize = "15px"
    //this.el.nativeElement.style.fontWeight = "normal"
    //this.el.nativeElement.style.fontStyle = "normal"
    //this.el.nativeElement.style.textDecoration = "none"
    //this.el.nativeElement.style.backgroundColor = "white"
    
    this.el.nativeElement.classList.remove("red", "accent-4")
    this.el.nativeElement.classList.add("white")


  }

}

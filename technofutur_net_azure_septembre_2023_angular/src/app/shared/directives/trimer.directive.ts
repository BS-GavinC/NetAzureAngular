import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[Trimer]'
})
export class TrimerDirective {

  constructor(private el : ElementRef) {
    
  }

  // //partie 1
  // @HostListener("window:load")
  // trimer()
  // {
  //   this.el.nativeElement.innerText = this.el.nativeElement.innerText.replaceAll(" ", "")
  // }


  //partie 2 
  @HostListener("mouseover") overing(){
    this.el.nativeElement.style.color = "red"
    this.el.nativeElement.style.cursor = "pointer"
  }

  @HostListener("mouseleave") deovering(){
    this.el.nativeElement.style.color = "white"
    this.el.nativeElement.style.cursor = "auto"
  }

  @HostListener("click")  trimer(){
    this.el.nativeElement.innerText = this.el.nativeElement.innerText.replaceAll(" ", "")
  }


}

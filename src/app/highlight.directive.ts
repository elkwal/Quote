// import { Directive } from '@angular/core';
//
// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {
//
//   constructor() { }
//
// }

import { Directive, HostListener, Input, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input("appHighlight") highest: boolean;
  constructor(private elem: ElementRef) {
  }
  @HostListener('change') ngOnChanges() {
    if (this.highest) {
      this.elem.nativeElement.style.backgroundColor = '#Black';
      this.elem.nativeElement.style.color = 'Blue';
    }
    else {
      this.elem.nativeElement.style.backgroundColor = 'Red';
      this.elem.nativeElement.style.color = 'Black';
    }
  }
  ngOnInit() {

  }
}

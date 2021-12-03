import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';

  constructor(private _element: ElementRef) {
    // console.log('constructor HighlightDirective', this.appHighlight);
  }

  ngOnInit(): void {
    console.log('ngOnInit HighlightDirective', this.appHighlight);

    if(!this.appHighlight) {
      this.appHighlight ='blue';
    }
    this._element.nativeElement.style.color = this.appHighlight;

  }


}

import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]',
  standalone: true
})
export class MyCustomDirectiveDirective implements OnChanges {

  @Input() extgernalColor : string = 'black'
  @Input('appMyCustomDirective') defaultColor : string = ''


  constructor(private ele : ElementRef) { 
    }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor
  }

    @HostListener('mouseover') hover(){
      this.ele.nativeElement.style.backgroundColor = this.extgernalColor
    }

    @HostListener('mouseout') out(){
      this.ele.nativeElement.style.backgroundColor = this.defaultColor
    }

}

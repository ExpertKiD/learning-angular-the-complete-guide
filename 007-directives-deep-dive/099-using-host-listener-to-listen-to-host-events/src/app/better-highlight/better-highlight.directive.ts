import {Directive, ElementRef, HostListener, OnInit, Renderer2, RendererStyleFlags2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','red');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'blue'
      );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'transparent'
    );
  }
}

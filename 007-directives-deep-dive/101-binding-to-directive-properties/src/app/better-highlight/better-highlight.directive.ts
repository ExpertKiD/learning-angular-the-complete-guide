import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  RendererStyleFlags2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.highlightColor,
      );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.defaultColor,
    );
  }
}

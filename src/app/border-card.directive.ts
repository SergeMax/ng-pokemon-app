import { Directive, ElementRef, HostListener } from '@angular/core';
import { time } from 'console';

@Directive({ selector: '[pkmnBorderCard]'})
export class BorderCardDirective {

    constructor(private el: ElementRef){
        this.setBorder('#f5f5f5');
        this.setHeight(180);
        this.setTransition('border', 0.4);
        
    }
    setTransition(name: string, time: number) {
        this.el.nativeElement.style.transition = name +' ' + time +'s';
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder('#009688');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string){
        let border = 'solid 4px' + color;
        this.el.nativeElement.style.border = border;

    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }



}
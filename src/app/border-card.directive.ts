import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({ selector: '[pkmnBorderCard]' })
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeigt: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeigt);
        this.setTransition('border 0.4s, backgroundColor 0.4s');

    }


    @Input('pkmnBorderCard') borderColor: string;
    @Input('pkmnHoverBackgroundColor') backgroundColor: string;


    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
        this.setBackgroundColor(this.backgroundColor || 'white');

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
        this.setBackgroundColor('white');

    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setTransition(name: string) {
        this.el.nativeElement.style.transition = name;
    }

    private setBackgroundColor(backGroundColor: string ){
        this.el.nativeElement.style.backgroundColor = backGroundColor;

    }

    


}
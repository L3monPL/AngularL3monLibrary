import { Component, ElementRef, HostListener, Input } from '@angular/core';

export interface SelectObject{
  selectedId: number,
  deleteReplyButton: boolean,
  // list: [
  //   {
  //     id: number,
  //     name: string|number,
  //     shortName?: string|number
  //   }
  // ]
}

@Component({
  selector: 'l3l-select',
  standalone: false,
  templateUrl: './l3l-select.component.html',
  styleUrl: './l3l-select.component.css'
})
export class L3lSelectComponent {

  constructor(
    private elementRef: ElementRef
  ) { }


  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      console.log('click outside')
      this.openAbsoluteNgContent = false
    }
  }

  // ----------------------------------------------- //

  @Input() selectObject?: SelectObject = {
    selectedId: 0,
    deleteReplyButton: true
  }

  openAbsoluteNgContent = false

  openSelect(){
    this.openAbsoluteNgContent = !this.openAbsoluteNgContent
  }

  closeSelect(){
    this.openAbsoluteNgContent = false
    console.log('zamknij')
  }
  
}

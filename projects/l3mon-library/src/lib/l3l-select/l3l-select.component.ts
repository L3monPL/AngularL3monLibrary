import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

// export interface SelectObject{
//   selectedId: number,
//   deleteReplyButton: boolean
// }
export interface CustomStyle{
  backgroundInput: string,
  borderInput: string,
  borderInputRadius: string,
  backgroundOptions: string,
  borderOptionsRadius: string
}

@Component({
  selector: 'l3l-select',
  standalone: false,
  templateUrl: './l3l-select.component.html',
  styleUrl: './l3l-select.component.css'
})
export class L3lSelectComponent implements OnChanges, OnInit, AfterViewInit{

  @Input() changeValue: any
  @Input() customStyle?: CustomStyle = {
    backgroundInput: '#fff',
    borderInput: '1 px solid #000',
    borderInputRadius: '6px',
    backgroundOptions: '#ebebeb',
    borderOptionsRadius: '6px'
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.openAbsoluteNgContent = false
    }
  }

  @ViewChild('inputElement') inputElement!: ElementRef;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.setStyle()
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['changeValue']) {
      this.closeSelect() 
    }
  }


  // ----------------------------------------------- //

  // @Input() selectObject?: SelectObject = {
  //   selectedId: 0,
  //   deleteReplyButton: true
  // }

  openAbsoluteNgContent = false

  openSelect(){
    this.openAbsoluteNgContent = !this.openAbsoluteNgContent
  }

  closeSelect(){
    this.openAbsoluteNgContent = false
  }

  // --------------------- STYLE -------------------------- //

  setStyle(){
    this.inputElement!.nativeElement.style.backgroundColor = this.customStyle?.backgroundInput
  }

  // --------------------- END STYLE ---------------------- //
  
}

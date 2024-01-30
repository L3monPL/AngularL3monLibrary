import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L3monLibraryComponent } from './l3mon-library.component';
import { L3lButtonComponent } from './l3l-button/l3l-button.component';



@NgModule({
  declarations: [
    L3monLibraryComponent,
    L3lButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    L3monLibraryComponent,
    L3lButtonComponent
  ]
})
export class L3monLibraryModule { }

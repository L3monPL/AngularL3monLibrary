import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L3monLibraryComponent } from './l3mon-library.component';
import { L3lButtonComponent } from './l3l-button/l3l-button.component';
import { L3lSelectComponent } from './l3l-select/l3l-select.component';



@NgModule({
  declarations: [
    L3monLibraryComponent,
    L3lButtonComponent,
    L3lSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    L3monLibraryComponent,
    L3lButtonComponent,
    L3lSelectComponent
  ]
})
export class L3monLibraryModule { }

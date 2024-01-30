import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L3monLibraryComponent } from './l3mon-library.component';
import { L3lButtonModule } from './l3l-button/l3l-button.module';



@NgModule({
  declarations: [
    L3monLibraryComponent
  ],
  imports: [
    CommonModule,
    L3lButtonModule
  ],
  exports: [
    L3monLibraryComponent
  ]
})
export class L3monLibraryModule { }

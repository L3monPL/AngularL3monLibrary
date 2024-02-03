import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { L3monLibraryModule } from '../../projects/l3mon-library/src/lib/l3mon-library.module';
import { CustomStyle } from '../../projects/l3mon-library/src/lib/l3l-select/l3l-select.component';
// import { L3lButtonModule } from '../../projects/l3mon-library/src/lib/l3l-button/l3l-button.module';
// import { L3monLibraryModule } from '../../projects/l3mon-library/src/lib/l3mon-library.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    L3monLibraryModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'L3monLibraryProject';

  items = [
    {
      id: 0,
      name: 'item 0'
    },
    {
      id: 1,
      name: 'item 1'
    },
    {
      id: 2,
      name: 'item 2'
    },
    {
      id: 3,
      name: 'item 3'
    },
    {
      id: 4,
      name: 'item 4'
    },
  ]

  selectedItemId = 0

  selectItem(item: any){
    this.selectedItemId = item.id
  }

  getSelectedItem(){
    return this.items.find(item => item.id == this.selectedItemId)?.name
  }

  getItems(){
    return this.items.filter(item => item.id !== this.selectedItemId)
  }

  setCustomStyle(){
    let style: CustomStyle = {
      backgroundInput: '#fff',
      borderInput: '1 px solid #000',
      borderInputRadius: '6px',
      backgroundOptions: '#ebebeb',
      borderOptionsRadius: '6px'
    } 
    return style
  }
}

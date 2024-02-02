import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { L3monLibraryModule } from '../../projects/l3mon-library/src/lib/l3mon-library.module';
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
      name: 'answer 0'
    },
    {
      id: 1,
      name: 'answer 1'
    },
    {
      id: 2,
      name: 'answer 2'
    },
  ]

  selectedItemId = 0

  selectItem(item: any){
    this.selectedItemId = item.id
    this.closeSelect1()
  }

  getSelectedItem(){
    return this.items.find(item => item.id == this.selectedItemId)?.name
  }

  closeSelect1(){
    
  }
}

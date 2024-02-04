
# Angular L3mon UI Library

Library includes:

- input - SELECT


## Get Started

#### Step 1: Install l3monLibrary: 
#### NPM

```typescript
npm i l3mon-library
```

#### Step 2: Import the L3monLibraryModule

```typescript
import { L3monLibraryModule } from 'l3mon-library';

@NgModule({
  declarations: [AppComponent],
  imports: [L3monLibraryModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Usage: l3l-select
#### In template use <l3l-select> component with your custom options

```html
<l3l-select [changeValue]="getSelectedItem()" [customStyle]="setCustomStyle()">
    <div l3l-label>{{getSelectedItem()}}</div>
    <div options>
        @for (item of getItems(); track $index) {
            <div (click)="selectItem(item)" class="item">
                {{item.name}}
            </div>
        }
    </div>
</l3l-select>
```

#### Ts config

```typescript
@Component({...})
export class ExampleComponent {

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
    }
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
      heightInput: '30px',
      sideInputPadding: '0.5rem',
      backgroundInput: '#fff',
      borderInput: '1px solid #ccc',
      borderInputRadius: '6px',
      backgroundOptions: '#ebebeb',
      borderOptionsRadius: '6px'
    } 
    return style
  }
}
```

## Features input - SELECT

- custom creation of drop-down options
- custom input look
- custom look through prepared objects


## Authors

- [@L3monPL](https://github.com/L3monPL)



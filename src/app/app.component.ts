import { Component } from '@angular/core';

interface Item {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [];
  newItem: string = '';


  constructor() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

   addItem(): void {
     this.items.push({ name: this.newItem, completed: false });
    this.newItem = '';
     this.saveItems();
   }

  editItem(index: number): void {
    const newName = prompt('Enter a new name', this.items[index].name);
    if (newName) {
      this.items[index].name = newName;
      this.saveItems();
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.saveItems();
  }

  saveItems(): void {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
//   checkBox():void {
//     var checked = document.querySelectorAll('input[type=checkbox]')
//     var spanLi = document.querySelectorAll('.spanLi')
//     for (let i = 0; i < checked.length; i++) {
//       console.log ("Task: " + spanLi[i].textContent);
//       spanLi[i].setAttribute('class','.del')
//     }
//     checked.forEach(function(value){
//     })
// }


}


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  
  // onDelete(index: number){
  //   console.log(index);
  //   this.onDeleteEvent.emit(index);
  // }

  onDeleteCharacterList(id: string): void{
    // if(!id) return;

    this.onDelete.emit(id);
  }

}

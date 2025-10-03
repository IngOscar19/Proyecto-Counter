import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Character } from '../Interface/index';
import { CharacterListComponent } from '../Components/character-list/character-list.component';
import { CharacterAddComponent } from '../character-add/character-add.component';


@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss']
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  addCharacter(character: { name: string; power: number }) {
    const newId = this.characters().length
      ? Math.max(...this.characters().map(c => c.id)) + 1
      : 1;

    const newCharacter: Character = {
      id: newId,
      name: character.name,
      power: character.power
    };

    this.characters.update(chars => [...chars, newCharacter]);
  }


  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Krillin', power: 1001 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 5, name: 'Gohan', power: 2001 },
    
  ]);


}
import { Component, linkedSignal, effect } from '@angular/core';
import { Character } from '../Interface/index';
import { CharacterListComponent } from '../Components/character-list/character-list.component';
import { CharacterAddComponent } from '../character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrls: ['./dragonball-super.component.scss']
})
export class DragonballSuperComponent {

  // 👇 Aquí también usamos función + tipo explícito
  characters = linkedSignal<Character[]>(() => {
    const data = localStorage.getItem('characters');
    return data
      ? JSON.parse(data)
      : [
          { id: 1, name: 'Goku', power: 9001 },
          { id: 2, name: 'Vegeta', power: 8001 },
          { id: 3, name: 'Krillin', power: 1001 },
          { id: 4, name: 'Yamcha', power: 500 },
          { id: 5, name: 'Gohan', power: 2001 }
        ];
  });

  constructor() {
    // Guardar cambios automáticamente
    effect(() => {
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });
  }

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

  clearCharacters() {
    this.characters.set([]);
    localStorage.removeItem('characters');
  }
}

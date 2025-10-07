import { Component, linkedSignal, effect } from '@angular/core';
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

  // Campos para el formulario
  name = linkedSignal<string>(() => localStorage.getItem('name') ?? '');
  power = linkedSignal<number>(() => Number(localStorage.getItem('power')) || 0);

  // Lista de personajes en localStorage
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
    // Guardar automáticamente cuando cambian los valores
    effect(() => localStorage.setItem('name', this.name()));
    effect(() => localStorage.setItem('power', this.power().toString()));
    effect(() => localStorage.setItem('characters', JSON.stringify(this.characters())));
  }

  // Agregar nuevo personaje
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

  
  clearAll() {
    this.name.set('');
    this.power.set(0);
    this.characters.set([]);
    localStorage.clear();
  }
}

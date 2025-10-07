import { Component, EventEmitter, Output, linkedSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.scss']
})
export class CharacterAddComponent {

  // 👇 Indicamos el tipo genérico y usamos función como argumento
  name = linkedSignal<string>(() => localStorage.getItem('name') ?? '');
  power = linkedSignal<number>(() => Number(localStorage.getItem('power')) || 0);

  @Output() characterAdded = new EventEmitter<{ name: string; power: number }>();

  constructor() {
    // Persistencia automática
    effect(() => localStorage.setItem('name', this.name()));
    effect(() => localStorage.setItem('power', this.power().toString()));
  }

  addCharacter() {
    if (this.name().trim() === '' || this.power() <= 0) return;

    this.characterAdded.emit({
      name: this.name(),
      power: this.power()
    });

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

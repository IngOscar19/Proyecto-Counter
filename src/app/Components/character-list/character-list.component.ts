import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Character } from '../../Interface/index';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {
   characters = input.required<Character[]>();
 

  
}
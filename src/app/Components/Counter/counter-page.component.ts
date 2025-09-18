import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  template: `
    <h1>{{ counter }}</h1>
    <h2>Counter Component</h2>
    <button (click)="counter = counter + 1"> + </button>
    <button (click)="counter = counter - 1" [disabled]="counter === 0"> - </button>

  `
})
export class CounterPageComponent {
  counter = 10;
 
  
}
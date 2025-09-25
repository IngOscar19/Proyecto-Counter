import { Component, ElementRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-page.component.html',
  
})

export class HeroPageComponent {
    name = signal<string>('Ironman');
    age = signal<number>(45);

    nameCapitalized = computed(() => this.name().toUpperCase());

    getHeroDescription() {
        return `${this.name()} tiene ${this.age()} `;
    }

    changeHero() {
        this.name.set('Spiderman');
         this.age.set(22);
    }

    

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }

   
}
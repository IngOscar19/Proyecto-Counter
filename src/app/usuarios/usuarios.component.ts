import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  nombre = signal('Oscar');
  edad = signal(21);

  // Referencias a los elementos de los modales
  @ViewChild('modalNombre') modalNombre!: ElementRef;
  @ViewChild('modalEdad') modalEdad!: ElementRef;
  @ViewChild('modalReset') modalReset!: ElementRef;

  nuevoNombre = '';
  nuevaEdad: number | null = null;
  nombreReset = '';

  private abrirModal(el: ElementRef) {
    const modal = new (window as any).bootstrap.Modal(el.nativeElement);
    modal.show();
  }

  abrirCambiarNombre() { this.nuevoNombre = this.nombre(); this.abrirModal(this.modalNombre); }
  abrirCambiarEdad()   { this.nuevaEdad = this.edad(); this.abrirModal(this.modalEdad); }
  abrirReset()         { this.nombreReset = this.nombre().toUpperCase(); this.abrirModal(this.modalReset); }

  guardarNombre() { if (this.nuevoNombre) this.nombre.set(this.nuevoNombre); }
  guardarEdad()   { if (this.nuevaEdad !== null) this.edad.set(this.nuevaEdad); }
  guardarReset()  { if (this.nombreReset) this.nombre.set(this.nombreReset.toUpperCase()); }
}
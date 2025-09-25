import { Routes } from '@angular/router';
import { CounterPageComponent } from './Components/Counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  {path:'',component:UsuarioComponent},
  {path:'',component:UsuariosComponent},
  {path: 'hero',component: HeroPageComponent}
  
];

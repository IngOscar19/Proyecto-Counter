import { Routes } from '@angular/router';
import { CounterPageComponent } from './Components/Counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HeroPageComponent } from './Pages/hero/hero-page.component';
import { DragonballPageComponent } from './dragonball-page/dragonball-page.component';
import { DragonballSuperComponent } from './dragonball-super/dragonball-super.component';
import { CharacterListComponent } from '../app/Components/character-list/character-list.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  {path:'usuario',component:UsuarioComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path: 'hero',component: HeroPageComponent},
  {path: 'dragonball', component: DragonballPageComponent},
  {path: 'dragonball-super', component: DragonballSuperComponent},
  {path: 'lista', component: CharacterListComponent}


  
];

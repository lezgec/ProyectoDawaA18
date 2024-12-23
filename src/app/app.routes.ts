import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { RevisorDePropuestasComponent } from './components/revisor-de-propuestas/revisor-de-propuestas.component';
import { CoordinadorDeRevisionComponent } from './components/coordinador-de-revision/coordinador-de-revision.component';
import { GestoresComponent } from './components/gestores/gestores.component';
import { SecreatariaComponent } from './components/secreataria/secreataria.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'revisorDePropuestas', component: RevisorDePropuestasComponent },
  { path: 'coordinadorDeRevision', component: CoordinadorDeRevisionComponent },
  { path: 'gestores', component: GestoresComponent },
  { path: 'secretaria', component: SecreatariaComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
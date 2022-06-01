import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlumnoComponent } from './components/alumno/create-alumno/create-alumno.component';
import { ListAlumnoComponent } from './components/alumno/list-alumno/list-alumno.component';
import { ListGrupoComponent } from './components/grupo/list-grupo/list-grupo.component';

const routes: Routes = [
  {
    path: "alumno",
    component: ListAlumnoComponent
  },
  {
    path: "createalumno",
    component: CreateAlumnoComponent
  },
  {
    path: "grupo",
    component: ListGrupoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

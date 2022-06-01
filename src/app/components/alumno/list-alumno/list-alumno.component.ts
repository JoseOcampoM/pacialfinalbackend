import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jo_alumnoService } from 'src/app/services/alumno.service';
import { Jo_alumnoI } from 'src/app/models/alumno';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit {

  public alumnos: Jo_alumnoI[] = []
  public displayedColumns: string[] = ["id", "nombre", "direccion", "telefono", "correo", "Jo_grupoId"]
  constructor(
    private alumnoService: Jo_alumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarAlumnos()
  }
  mostrarAlumnos(){
    this.alumnoService.getAllAlumno()
      .subscribe({
        next: (data) => {
          this.alumnos = data.alumno
          console.log(this.alumnos)
        }
      })
  }
}

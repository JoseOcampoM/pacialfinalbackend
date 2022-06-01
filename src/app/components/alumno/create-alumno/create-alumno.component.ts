import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Jo_alumnoService } from 'src/app/services/alumno.service';
import { Jo_alumnoI } from 'src/app/models/alumno';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      Jo_grupoId: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private alumnoService: Jo_alumnoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:Jo_alumnoI = this.formulario.value;
    this.alumnoService.create(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Alumno Creado correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/alumno');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/alumno');
      }
    })
  }
}

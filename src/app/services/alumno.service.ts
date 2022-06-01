import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Jo_alumnoI } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class Jo_alumnoService {
  api_uri = 'http://localhost:4000';
  constructor(
    private http:HttpClient
  ) { }

  getAllAlumno():Observable<{alumno:Jo_alumnoI[]}>{
    return this.http.get<{alumno:Jo_alumnoI[]}>(this.api_uri + '/alumnos')
  }

  create(data:any):Observable<Jo_alumnoI>{
    return this.http.post<Jo_alumnoI>(this.api_uri + '/createalumno', data)
  }
}
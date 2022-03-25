import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Formulario } from '../formulario/formulario';


@Injectable({
  providedIn: 'root'
})
export class ListarService {
  private urlEndPoint: string = 'http/localhost:8080/api/formularios';

  constructor(private http: HttpClient) { }

  getFormularios(): Observable<Formulario[]>{
    return this.http.get<Formulario[]>(this.urlEndPoint);
  }
}

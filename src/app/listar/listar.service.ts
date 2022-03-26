import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formulario } from '../formulario/formulario';


@Injectable({
  providedIn: 'root'
})
export class ListarService {
  private urlEndPoint: string = 'http://localhost:8080/api/formularios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
      
  constructor(private http: HttpClient) { }

  getFormularios(): Observable<Formulario[]>{
    return this.http.get<Formulario[]>(this.urlEndPoint);
  }

  create(formulario: Formulario) : Observable<Formulario> {
    return this.http.post<Formulario>(this.urlEndPoint, formulario, {headers: this.httpHeaders})
  }

  getFormulario(id): Observable<Formulario>{
    return this.http.get<Formulario>(`${this.urlEndPoint}/${id}`)
  }

  update(formulario: Formulario): Observable<Formulario>{
    return this.http.put<Formulario>(`${this.urlEndPoint}/${formulario.id}`, formulario, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Formulario>{
    return this.http.delete<Formulario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}

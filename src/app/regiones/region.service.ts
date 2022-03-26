import { Injectable } from '@angular/core';
import { REGIONES } from './regiones.json';
import { Region } from './region';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  regiones: Region[];

  comunas: string[];

  constructor() { }

  getRegion(): Observable<Region[]>{
    return of(REGIONES);
  }

  getComuna(id:number){
    this.getRegion().subscribe(
      regiones => this.regiones = regiones
    )
    
    for (let i = 0; i < this.regiones.length; i++) {
      if(id == this.regiones[i].id){
        this.comunas = this.regiones[i].comunas;
      }
    }
    return this.comunas
  }
}

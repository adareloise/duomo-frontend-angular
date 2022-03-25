import { Injectable } from '@angular/core';
import { REGIONES } from './regiones.json';
import { Region } from './region';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  getRegion(): Observable<Region[]>{
    return of(REGIONES);
  }

}

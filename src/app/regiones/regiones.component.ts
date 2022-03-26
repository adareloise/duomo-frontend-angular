import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario/formulario';
import { Region } from './region';
import { RegionService } from './region.service'
declare var jQuery: any;

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
})
export class RegionesComponent implements OnInit{

  public formulario: Formulario = new Formulario()

  regiones: Region[] = [];

  comunas: string[] = [];

  selectedRegion:Promise<boolean>|null = null
  
  comuna:Promise<string[]>|null = null

  constructor( private regionService: RegionService ) { }

  ngOnInit() {
    this.regionService.getRegion().subscribe(
      regiones => this.regiones = regiones
    );
  }

  setComunasRegion(event){
    this.selectedRegion = new Promise<boolean>((resolve, reject) => {
      resolve(true)
    })
    this.comuna= new Promise<string[]>((res,rej)=>res(this.comunas = this.regionService.getComuna(event.target.value)))
    console.log(this.comuna)
    }
}

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

  constructor( private regionService: RegionService ) { }

  ngOnInit() {
    this.regionService.getRegion().subscribe(
      regiones => this.regiones = regiones
    );
  }

  getComunas(){
    const id = jQuery('#region-select').val();
    
    this.regiones.forEach((region) => {
      if(id == region.id){
        this.comunas = region.comunas; 
      }
    });

    return this.comunas;
  }
}

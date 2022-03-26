import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarService } from '../listar/listar.service';
import { Formulario } from './formulario';
import swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  public formulario: Formulario = new Formulario()
  public titulo:string = "Crear Formulario"

  constructor(private listarService: ListarService,
    private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.cargarFormulario()
   } 

   cargarFormulario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.listarService.getFormulario(id).subscribe( (formulario) => this.formulario = formulario)
      }
    })
  }

 create(): void {
    this.listarService.create(this.formulario)
      .subscribe(formulario => {
        this.router.navigate(['/listar'])
        swal.fire('Nuevo Formulario', `Nombre ${formulario.nombre} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.listarService.update(this.formulario)
    .subscribe( formulario => {
      this.router.navigate(['/listar'])
      swal.fire('Formulario Actualizado', `Nombre ${formulario.nombre} actualizado con éxito!`, 'success')
    })
  }
}

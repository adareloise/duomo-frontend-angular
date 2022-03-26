import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario/formulario';
import { ListarService } from './listar.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  formularios: Formulario[];


  constructor(private listarService: ListarService) { }

  ngOnInit(){
    this.listarService.getFormularios().subscribe(
      formularios => this.formularios = formularios
    );
  }

  delete(formulario: Formulario): void {
    swal.fire({
      title: 'Estas Seguro?',
      text: "Esta acciòn es irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) =>{
      if (result.value) {

        this.listarService.delete(formulario.id).subscribe(
          response => {
            this.formularios = this.formularios.filter(form => form !== formulario)
            swal.fire(
              'Formulario Eliminado!',
              `Nombre ${formulario.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}

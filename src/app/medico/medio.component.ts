import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrls: ['./medio.component.sass']
})
export class MedioComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string;

  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {
    this._medicoService.getMedicos().subscribe(medicos=> this.medicos = medicos);
  }

  agregarMedico(){
    const medico = {nombre:'Dr Alejo'};

    this._medicoService.agregarMedico(medico).subscribe(
      medicoDb => this.medicos.push(medicoDb),
      err => this.mensajeError = err
    )
  }

  borrarMedico(id:string){
    const confirmar = confirm('Estas seguro de borrar este medico');
    if(confirmar){
      this._medicoService.borrarMedico(id);
    }
  }

}

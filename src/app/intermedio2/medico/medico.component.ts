import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/medico/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.sass']
})
export class MedicoComponent implements OnInit {

  constructor(public _medicoService:MedicoService) { }
  medicos: any[]=[]
  ngOnInit() {
  }

  saludarMedico(nombre:string){
    return 'hola '+nombre;
  }

  obtenerMedicos(){
    this._medicoService.getMedicos().subscribe((res)=>{
      this.medicos=res;
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http:HttpClient) { }

  getMedicos(){
    return this.http.get('...').pipe(map(resp=>resp['medicos']));
  }

  agregarMedico(medico:any){
    return this.http.post('...',medico).pipe(
      map(resp=> resp['medico'])
    )
  }

  borrarMedico(is:string){
    return this.http.delete('...').pipe(
      map(resp => resp['medico'])
    )
  }
}

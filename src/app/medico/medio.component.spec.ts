import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioComponent } from './medio.component';
import { MedicoService } from './medico.service';
import { Observable, of, throwError } from 'rxjs';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('MedioComponent', () => {
  let component: MedioComponent;
  let service = new MedicoService(new HttpClient(null));


  beforeEach(() => {
    component = new MedioComponent(service);

  });



  it('Init: Debe de cargar los medicos',()=>{
    
    spyOn(service,'getMedicos').and.returnValue(of(['Carlos','Andi','Julia']));
    component.ngOnInit();
    expect(component.medicos.length).toBeGreaterThan(0);
  })

  it('DEbe de llamar para agregar a un medico', () => {
    const espia = spyOn(service,'agregarMedico').and.returnValue(of({nombre:'Alejo'}));
    component.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de llamar para borrar a un medico', () => {
    spyOn(window,'confirm').and.returnValue(true);
    const espia = spyOn(service,'borrarMedico').and.returnValue(of({nombre:'Alejo'}));
    component.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No DEbe de llamar para borrar a un medico', () => {
    spyOn(window,'confirm').and.returnValue(false);
    const espia = spyOn(service,'borrarMedico').and.returnValue(of({nombre:'Alejo'}));
    component.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });

  it('Probar errores en', () => {
    const miError = 'No se pudo agregar';
    spyOn(service,'agregarMedico').and.returnValue(throwError('No se pudo agregar'));
    component.agregarMedico()
    expect(component.mensajeError).toBe(miError);
  });
});



/*Testing Reducer*/

/* describe('Description', () => {
  it('retornar el estado por defecto', () => {
    const action = {type: 'NOOP'}
    const result = reducer(undefined,action);

    expect(result).toBe(initialState)
  });
}); */

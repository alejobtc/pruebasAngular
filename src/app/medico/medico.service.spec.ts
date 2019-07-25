import { TestBed } from '@angular/core/testing';

import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { isObservable } from 'rxjs';


describe('MedicoService', () => {

  let servicio:MedicoService;
  beforeEach(() => {TestBed.configureTestingModule({
    
    
      imports:[HttpClientModule]
  
  })
  servicio = new MedicoService(new HttpClient(null))
  }
  );

  it('should be created', () => {
    const service: MedicoService = TestBed.get(MedicoService);
    expect(service).toBeTruthy();
  });

  it('shouuld return observable on get medicos',()=>{
    let resp = servicio.getMedicos();
    expect(resp).toBeTruthy()
  })
  
/*   it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    servicio.getMedicos().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  }); */


});



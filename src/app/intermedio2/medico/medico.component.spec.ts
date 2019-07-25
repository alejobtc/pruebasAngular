import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('MEdico compoene', () => {
    let component : MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    beforeEach(function() {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers:[MedicoService],
            imports:[HttpClientModule]
        })
        
        fixture=TestBed.createComponent(MedicoComponent);
        component=fixture.componentInstance;
        fixture.detectChanges();
    });
    

    it('Se debe crear el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Juan';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
    });
});
import { FormularioRegister } from "./formulario";
import { cpus } from 'os';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

    let component:FormularioRegister;
    beforeEach(()=> {
        component = new FormularioRegister( new FormBuilder());
    });
    
    it('Debe de crear un formulario con 2 campos', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('pass')).toBeTruthy();
    });

    it('Email obligatorio', () => {
        const control = component.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('Email valido', () => {
        const control = component.form.get('email');
        control.setValue('sasa@wqq.co');
        expect(control.valid).toBeTruthy();
    });
});
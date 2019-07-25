import { mensaje } from "./string";

describe('Pruebas de Strings',()=>{
    it('Debe de regresar un string',()=>{

        const resp = mensaje('Alejo');
        expect(typeof resp).toBe('string');

    });

    it('Debe contener un saludo al nombre',()=>{
        const nombre = 'Alejo'
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })
   
    
});
